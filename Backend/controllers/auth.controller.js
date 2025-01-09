import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/auth.model.js';



const login = async (req, res) => {
    try{
        const { email, password } = req.body;
        const check = await User.findOne({ email });
        if(check){
            const valid = await bcrypt.compare(password, check.password);
            if(valid){
                const token = jwt.sign({ email }, process.env.KEY, { expiresIn: '1h' }); 
                res.json({token});
            }
            else {
                res.status(401).json("Retry ! Wrong Password");
            }
        }
        else {
            res.status(404).json("User does not exist");
        }
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}

const signup = async (req, res) => {
    try{
        const { email , username , contact , name , password } = req.body;
        const check = await User.findOne({ email });
        if(check){
            res.status(409).json("Email already exists");
        }
        else {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);
            const newUser = new User({ email , username , contact , name , password: hash});
            const registered = await newUser.save();
            res.json("User Registered");
        }
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}

const findUserbyId = async (req, res) => {
    try{
        const id = req.params.id;
        const found = await User.findById(id);
        res.json(found);
    }
    catch(err){
        res.status(404).json("User does not exist");
    }
}

export default { login, signup, findUserbyId };
