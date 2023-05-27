import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { userContext } from '../context/AuthContext';

const Login = () => {

  const { login } = useContext(userContext)

    const [input, setInput] = useState({
        Name: "",
        email: "",
    });


    const handleChange = (e) => {
        const value = e.target.value;
        console.log(value)

        setInput({
          ...input,
          [e.target.name]: value,
        })
    }


    const submitForm = () => {

      login(input)

      JSON.parse(localStorage.setItem("user", JSON.stringify(input)))
    }
    
  return (
    <div>
      <p>Add User</p>
      <div>
        <form onSubmit={submitForm}>
          <label>
            User Name:
            <input
              type="text"
              name="Name"
              placeholder="name"
              value={input.Name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              placeholder="email"
              value={input.userName}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>

  )
}

export default Login
