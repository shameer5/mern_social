import express from 'express'

/* bcrypt is used for hashing passwords of the users */
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

export const registerUser = async (req,res) => {
    const {firstName, lastName, email, password, confirmPassword} = req.body;
    
    try{
        const existUser = await User.findOne({ email });
        if(existUser)
            return res.status(400).json({message: "User Already Exists"})
        if(password !== confirmPassword)
            return res.status(400).json({message: "Passwords dont' match"})

        /* bcyrpt.hash( @param -> the variable we want to hash, 
            @param-> the difficulty of the hash (Generally set as 12)) */
        const hashPassword = await bcrypt.hash(password, 12)
        console.log("Registering New User...")
        
        const newUser = await User.create({ email, password: hashPassword, name: `${firstName} ${lastName}`})

        const token = jwt.sign({email: newUser.email, id: newUser._id}, 'creatingTest...', {expiresIn: '1h'})

        return res.status(200).json({ result: newUser, token})
    } catch(error) {
        res.status(500).json({message: "DIDNT WORTK AT ALL IN CREATING"})
    }
}

export const loginUser = async (req,res) => {
    const {email, password} = req.body;
    try{
        console.log("LoggingIn User...")
        const existUser = await User.findOne({ email });
        if(!existUser)
            return res.status(404).json({message: "Cant find User"})
        const verifyPassword = await bcrypt.compare(password, existUser.password)
        if(!verifyPassword)
            return res.status(400).json({message: 'Password is wrong'})
        const token = jwt.sign({email: existUser.email, id: existUser._id}, 'creatingTest...', {expiresIn: '1h'})
        return res.status(200).json({ result: existUser, token})
    } catch(error) {
       res.status(500).json({message: "DIDNT WORTK AT ALL"})
    }
}