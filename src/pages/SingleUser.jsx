import axios from 'axios'
import React, { useContext } from 'react'
import { getUsersContext } from '../context/userDataContex'

const SingleUser = () => {

  const { users, getSingleUser } = useContext(getUsersContext)


  getSingleUser()


  return (

    <div>

      <h1>{users.name}</h1>

    </div>
 
  )
}

export default SingleUser