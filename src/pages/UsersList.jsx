import axios from 'axios'
import React, { useContext } from 'react'
import { getUsersContext } from '../context/userDataContex'

const UsersList = () => {

  const { users, getUsers  } = useContext(getUsersContext)

  getUsers()


  return (

    <div>

      {
        users.map((int) => {
          return(
            <div key={int.id}>
              <h1>{int.name}</h1>
            </div>
          )
        })
      }

    </div>
 
  )
}

export default UsersList