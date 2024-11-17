import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import userModel from "./models/UserScema.js"
import bcrpyt from "bcryptjs"
import jwt from "jsonwebtoken"
const app = express()

const salt = bcrpyt.genSaltSync(10)
const secret = "secretservice"

app.use(cors())
app.use(express.json())

const mongourl =
 "mongodb+srv://guy33liba:guy33liba@blog-app.xo5dt.mongodb.net/?retryWrites=true&w=majority&appName=blog-app"

mongoose.connect(mongourl, console.log("hello mongoose server"))
app.post("/register", async (req, res) => {
 const { username, password } = req.body
 try {
  const hashedPassword = bcrpyt.hashSync(password, salt)
  const userDoc = await userModel.create({ username, password: hashedPassword })
  res.json(userDoc)
 } catch (error) {
  res.status(400).json(error)
 }
})
app.post("/login", async (req, res) => {
 const { username, password } = req.body
 const userDoc = await userModel.findOne({ username })
 const passOK = bcrpyt.compareSync(password, userDoc.password)
 res.json(passOK)
 if (passOK) {
  jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
   console.log(username)
   res.cookie("token", token).json("ok")
  })
 } else {
  res.status(401).json({ error: "invalid credentials" })
 }
})
app.listen(4000)
