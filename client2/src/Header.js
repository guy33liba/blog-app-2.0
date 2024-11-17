import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "./Usercontext"

const Header = () => {
  const { setUserInfo, userinfo } = useContext(UserContext)
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userinfo) => {
        setUserInfo(userinfo)
      })
    })
  }, [])
  const username = userinfo.username
  function logout() {
    fetch("http://localhost:4000/logout", {
      method: "POST",
      credentials: "include",
    }).then(() => {
      setUserInfo(null)
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
