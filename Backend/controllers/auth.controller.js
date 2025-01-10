import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/auth.model.js';

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json("User does not exist");
        }
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            return res.status(401).json("Retry ! Wrong Password");
        }
        res.json("Welcome ! " + user.firstName + " " + user.lastName + " ");
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const signUp = async (req, res) => {
    try {
        const { email, userId, contact, firstName, lastName, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json("Email already exists");
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const newUser = new User({ email, userId, contact, firstName, lastName, password: hash });
        await newUser.save();
        res.json("User Registered");
    } catch (err) {
        if (err.name === "ValidationError") {
            return res.status(400).json(err.message);
        }
        res.status(500).json({ message: err.message });
    }
};

const searchUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json("User does not exist");
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export { login, signUp, searchUser };