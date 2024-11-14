import React, { useState } from "react"

const RegisterPage = () => {
 const [username, setUsername] = useState("")
 const [password, setPassword] = useState("")

 async function register(e) {
  e.preventDefault()
  await fetch("http://localhost:4000/", {
   method: "POST",
   body: JSON.stringify({ username, password }),
   headers: { "Content-Type": "application/json" },
  })
 }

 return (
  <form onSubmit={register}>
   <h1>Register</h1>
   <input
    type="text"
    placeholder="username"
    onChange={(e) => setUsername(e.target.value)}
   />
   <input
    type="password"
    placeholder="password"
    onChange={(e) => setPassword(e.target.value)}
   />
   <button>Register</button>
  </form>
 )
}

export default RegisterPage
