import express from "express"

const app = express()

app.use(express.json())
app.get("/", (req, res) => {
 res.send("Welcome to the api")
})
app.listen(4000)
