import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/users.model.js';

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



// 
// [
//   {
//     "userId": "user1",
//     "firstName": "John",
//     "lastName": "Doe",
//     "email": "john@example.com",
//     "password": "test1234",
//     "isAdmin": false,
//     "phoneNumber": "1234567890",
//     "address": {
//       "street": "123 Main St",
//       "city": "Example City",
//       "state": "XY",
//       "postalCode": "12345",
//       "country": "Exampleland"
//     },
//     "profileImage": "https://example.com/profile1.jpg",
//     "isActive": true,
//     "createdAt": "2023-10-07T12:00:00Z"
//   },
//   {
//     "userId": "user2",
//     "firstName": "Jane",
//     "lastName": "Smith",
//     "email": "jane@example.com",
//     "password": "secretpass",
//     "isAdmin": true,
//     "phoneNumber": "9876543210",
//     "address": {
//       "street": "456 Side St",
//       "city": "Sample Town",
//       "state": "AB",
//       "postalCode": "67890",
//       "country": "Sampleland"
//     },
//     "profileImage": "https://example.com/profile2.jpg",
//     "isActive": false,
//     "createdAt": "2023-10-01T09:15:00Z"
//   },
//   {
//     "userId": "user3",
//     "firstName": "Alice",
//     "lastName": "Wilson",
//     "email": "alice@example.com",
//     "password": "passw0rd",
//     "isAdmin": false,
//     "phoneNumber": "5551112233",
//     "address": {
//       "street": "789 Another Ave",
//       "city": "Test City",
//       "state": "CD",
//       "postalCode": "34567",
//       "country": "Testland"
//     },
//     "profileImage": "https://example.com/profile3.jpg",
//     "isActive": true,
//     "createdAt": "2023-09-20T10:00:00Z"
//   },
//   {
//     "userId": "user4",
//     "firstName": "Bob",
//     "lastName": "Brown",
//     "email": "bob@example.com",
//     "password": "b0bpass",
//     "isAdmin": false,
//     "phoneNumber": "5552223344",
//     "address": {
//       "street": "100 Example Blvd",
//       "city": "Demo Town",
//       "state": "EF",
//       "postalCode": "78901",
//       "country": "Demostan"
//     },
//     "profileImage": "https://example.com/profile4.jpg",
//     "isActive": true,
//     "createdAt": "2023-08-15T09:30:00Z"
//   }
// ]