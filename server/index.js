import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import userModel from "./models/UserScema.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser"

const app = express()

const salt = bcrypt.genSaltSync(10)
const secret = "secretservice"

app.use(cors({ credentials: true, origin: "http://localhost:3000" }))
app.use(express.json())
app.use(cookieParser())

const mongourl =
  "mongodb+srv://guy33liba:guy33liba@blog-app.xo5dt.mongodb.net/?retryWrites=true&w=majority&appName=blog-app"

mongoose.connect(mongourl, console.log("hello mongoose server"))
app.post("/register", async (req, res) => {
  const { username, password } = req.body
  try {
    const userDoc = await userModel.create({
      username,
      password: bcrypt.hashSync(password, salt),
    })
    res.json(userDoc)
  } catch (e) {
    console.log(e)
    res.status(400).json(e)
  }
})
app.post("/login", async (req, res) => {
  const { username, password } = req.body
  const userDoc = await userModel.findOne({ username })
  const passOK = bcrypt.compareSync(password, userDoc.password)
  // res.json(passOK) לא לא לא
  if (passOK) {
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      console.log(username)
      res.cookie("token", token).json("ok")
    })
  } else {
    res.status(401).json({ error: "invalid credentials" })
  }
})
app.get("/profile", async (req, res) => {
  const { token } = req.cookies
  jwt.verify(token, secret, {}, (err, token) => {
    if (err) {
      res.status(401).json({ error: "invalid token" })
    } else {
      res.json(token)
    }
  })
})
app.listen(4000)
