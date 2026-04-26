import express from "express"
import bcrypt from "bcrypt"
import User from "./models/user.model.js"
import jwt  from "jsonwebtoken"

const app = express()

import mongoose from "mongoose"

app.use(express.json())

import dotenv from "dotenv"
dotenv.config()

mongoose.connect(process.env.mongourl).then(() => {
    console.log("DB connected");
}).catch((err) => {
    console.log(err);
})
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.secret, { expiresIn: '1h' });
}

const verfiyToken = (req, res, next) => {
    const authheader = req.headers.authorization;
    if (!authheader) {
        return res.json({ messsage: "token mmissing" })
    }

    const token = authheader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.secret);
        req.id = decoded.id;
        next()
    }
    catch (err) {
        res.json({ err })
    }
}

app.use(express.static('model'))

app.post('/register', async (req, res) => {
    try {
        const { name, email, password, phone } = req.body
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashPassword,
            phone
        })
        res.json({ message: "user registered successfully", newUser: user})
    }
    catch (err) {
        res.json({err})
    }
})


app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ message: "email and password required" })
        }

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(401).json({ message: "invalid credentials" })
        }

        const token = generateToken(user._id)

        res.status(200).json({
            message: "user login successfully",
            token
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "server error" })
    }
})


app.get('/user', verfiyToken, async (req, res) => {
    try {
        const user = await User.find()
        res.json({ messsage: "user fetcched", alluser: user })
    }
    catch (err) {
        res.json({err})
    }
})
app.listen(3000)