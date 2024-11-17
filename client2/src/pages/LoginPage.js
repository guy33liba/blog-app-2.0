import React, { useState } from "react"

const LoginPage = () => {
<<<<<<< HEAD
 const [username, setUsername] = useState("")
 const [password, setPassword] = useState("")

 const login = async (e) => {
  e.preventDefault()
  await fetch("http://localhost:4000/login", {
   method: "POST",
   body: JSON.stringify({ username, password }),
   headers: { "Content-Type": "application/json" },
  }).then((res) => res.json())
 }
 return (
  <form className="login" onSubmit={login}>
   <h1>Login</h1>

   <input
    type="text"
    className=""
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
   <button>Login</button>
  </form>
 )
=======
  return (
    <form>
      <h1>Login</h1>
      <input type="text" className="" placeholder="username" />
      <input type="password" placeholder="password" />
      <button>Login</button>
    </form>
  )
>>>>>>> d5b234ad9a4b24975bd8da2f3ab8d9ee6f7f8259
}

export default LoginPage
