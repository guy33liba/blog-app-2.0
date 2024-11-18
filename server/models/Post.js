import mongoose from "mongoose"
import { Schema, model } from "mongoose"
const PostSchema = new Schema(
 {
  title: String,
  summary: String,
  content: String,
  cover: String,
 },
 { timestamps: true }
)

const postModel = model("post", PostSchema)
export default postModel
