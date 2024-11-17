import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
  const [username, setUsername] = useState(null)
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userinfo) => {
        setUsername(userinfo.username)
      })
    })
  }, [])
  
  function logout() {
    fetch("http://localhost:4000/logout", {
      method: "POST",
      credentials: "include",
    }).then(() => {
      setUsername(null)
    })
  }
  return (
    <div>
      <header>
        <Link to="/" className="logo">
          MyBlog
        </Link>
        <nav>
          {username && (
            <>
              <Link to="/create">Create New Post</Link>
              <a onClick={logout}>Logout</a>
            </>
          )}
          {!username && (
            <>
              <Link to="login">Login</Link>
              <Link to="register">Register</Link>
            </>
          )}
        </nav>
      </header>
    </div>
  )
}

export default Header
