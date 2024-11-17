import { useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
export default function CreatePost() {
 const [title, settitle] = useState("")
 const [summary, setsummary] = useState("")
 const [content, setcontent] = useState("")
 const formats = ["header", "bold", "italic", "underline", "strike"]
 return (
  <form>
   <input type="title" placeholder="Title" />
   <input type="summary" placeholder="Summary" />
   <input type="file" />
   <ReactQuill value={content} />
   <button>Create Post</button>
  </form>
 )
}
