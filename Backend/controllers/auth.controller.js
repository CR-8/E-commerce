import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/auth.model.js';


const login = async (req, res) => {
    try{
        const token = jwt.sign({ password }, process.env.KEY, { expiresIn: '1h' }); 
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, process.env.Key , salt);

        const { email , username ,  password } = req.params;
        const check = await User.findUserbyEmail(email);
        if(check){
            const valid = await bcrypt.compare(password, check.password);
            if(valid){
                res.json("Login Successful");
            }
            else {
                res.json("Retry ! Wrong Password");
            }
        }
    }
    catch(err){
        res.json("User does not exist");
    }
}

const signup = async (req, res) => {
    try{
        const password1 = req.params.password;
        const token = jwt.sign({ password }, process.env.KEY, { expiresIn: '1h' }); 
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, process.env.Key , salt);
        const { email , username , contact , name , password } = req.body;
        const newUser = new User({ email , username , contact , name , password: hash});
        const registered = await newUser.save();
        res.json("User Registered");

    }
    catch(err){
        res.json({message: err.message});
    }
}

const changePassword = async (req, res) => {
    try{
        const id = req.params.id;
        const newpassword = req.body.password;
        const update = await User.findByIdAndUpdate(id, {password: newpassword} );     
        res.json("Password Changed");   
    }
    catch(err){
        res.json("User does not exist");
    }
}

const findUserbyId = async (req, res) => {
    try{
        const id = req.params.id;
        const found = await User.findById(id);
        res.json(found);
    }
    catch(err){
        res.json("User does not exist");
    }
}

export default { login, signup, changePassword, findUserbyId };