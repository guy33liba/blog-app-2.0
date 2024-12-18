import mongoose from "mongoose"

const { Schema, model } = mongoose
const UserSchema = new Schema({
  username: { type: String, required: true, min: 4 },
  password: { type: String, required: true },
})
const userModel = model("user", UserSchema)
export default userModel
