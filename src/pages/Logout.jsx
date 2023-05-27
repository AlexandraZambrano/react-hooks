import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../context/AuthContext'

const Logout = () => {

  const { user, logout } = useContext(userContext)

  const handleLogout = () => {
    logout()
  }

  return (
    <div>
      {user ? `Hola ${user.Name}` : 'Hasta Pronto'}
      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout

