import React, { createContext, useState } from "react"
import axios from "axios"

export const userContext = createContext()

export const AuthContextProvider = ({children}) => { 

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

    const login = async(post) => {
        const res = await axios.post("https://jsonplaceholder.typicode.com/input/1", post)
        setUser(res.data)
    }

    const logout = () => {
        if(user){
            setUser(null)
        }else{
            setUser(user)
        }
    }


  return (
    <div>

        <userContext.Provider value={{user, login, logout}}>
            {children}
        </userContext.Provider>
      
    </div>
  )
}
