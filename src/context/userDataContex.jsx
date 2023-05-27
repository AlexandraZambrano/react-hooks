import axios from "axios";
import { createContext, useState, useEffect } from "react";


export const getUsersContext = createContext()



export const UsersContextProvider = ({children}) => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    
    useEffect(() => {
        getSingleUser()
    }, [])

    const getUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => setUsers(res.data))
    }

    const getSingleUser = () => {
        axios.get("https://jsonplaceholder.typicode.com/users/1")
        .then(res => setUsers(res.data))
        .then(data => console.log(data))
    }


    return(
        <getUsersContext.Provider value={{users, getUsers, getSingleUser}}>
            {children}
        </getUsersContext.Provider>
    )
}

