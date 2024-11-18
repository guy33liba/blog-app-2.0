import { useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
export default function CreatePost() {
 const [title, settitle] = useState("")
 const [summary, setsummary] = useState("")
 const [content, setcontent] = useState("")
 const [files, setFiles] = useState("")
 const formats = ["header", "bold", "italic", "underline", "strike"]

 function createNewPost(e) {
  e.preventDefault()
  const data = new FormData()
  data.set("title", title)
  data.set("summary", summary)
  data.set("content", content)
  data.set("file", files[0])
  console.log(files)
  fetch("http://localhost:4000/post"),
   {
    method: "POST",
    body: data,
   }
 }
 return (
  <form onSubmit={createNewPost} className="createPost">
   <input
    type="title"
    placeholder="Title"
    value={title}
    onChange={(e) => settitle(e.target.value)}
   />
   <input
    type="summary"
    placeholder="Summary"
    value={summary}
    onChange={(e) => setsummary(e.target.value)}
   />
   <input type="file" onChange={(e) => setFiles(e.target.files)} />
   <ReactQuill value={content} onChange={(e) => setcontent(e)} />
   <button className="createPostButton">Create Post</button>
  </form>
 )
}
