import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserModel from './models/Users.js';

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/clients")

app.post("/login", (req, res)=> {
    const {email, password} = req.body
    UserModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json( 'Login Successful')
            } else {
                res.json('Invalid Credentials')
            }
        } else {
            res.json('User not found')
        }
    })
})


app.post('/users', (req, res) => {
    UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.listen(3001, ()=> {
    console.log('Server is running on port 3001')
})