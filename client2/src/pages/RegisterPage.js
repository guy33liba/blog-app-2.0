import React, { useState } from "react"

const RegisterPage = () => {
 const [username, setUsername] = useState("")
 const [password, setPassword] = useState("")

 async function register(e) {
  e.preventDefault()
  const response = await fetch("http://localhost:4000/register", {
   method: "POST",
   body: JSON.stringify({ username, password }),
   headers: { "Content-Type": "application/json" },
  })
  if (response.status === 200) {
   console.log(response)
   alert("registered successfully")
  } else {
   alert("failed to register")
  }
 }

 return (
  <form onSubmit={register}>
   <h1>Register</h1>
   <input
    type="text"
    placeholder="username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
   />
   <input
    type="password"
    placeholder="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
   />
   <button>Register</button>
  </form>
 )
}

export default RegisterPage
