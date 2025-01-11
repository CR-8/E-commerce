import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/users.model.js';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'SolemonkiCHAT-HelloWorld'; 

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User does not exist" });
        }
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.json({
            token,
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
            }
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const signUp = async (req, res) => {
    try {
        const { email, password, name, phoneNumber, address } = req.body;
        
        if (!email || !password || !name) {
            return res.status(400).json({ message: "Please fill all required fields" });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password is too short" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "Email already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const newUser = new User({
            email,
            password: hash,
            name,
            phoneNumber,
            address
        });

        await newUser.save();

        const token = jwt.sign(
            { userId: newUser._id, email: newUser.email },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(201).json({
            message: "User registered successfully",
            token,
            user: {
                _id: newUser._id,
                email: newUser.email,
                name: newUser.name
            }
        });
    } catch (err) {
        if (err.name === "ValidationError") {
            return res.status(400).json({ message: err.message });
        }
        res.status(500).json({ message: err.message });
    }
};

const searchUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id).select('-password');
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export { login, signUp, searchUser };