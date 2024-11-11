import express from "express"
import cors from "cors"
const app = express()

app.use(cors())
app.post("/", (req, res) => {
 res.send("Welcome to the api")
})
app.listen(4000)
