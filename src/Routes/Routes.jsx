import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import SingleUser from '../pages/SingleUser';
import UsersList from '../pages/UsersList';

const AppRoutes = () => {
  return (
    <Router>
    <Routes>
          <Route path='/logout' element={<Logout />} />
          <Route path='/' element={<Login />} />
          <Route path='/single/user' element={<SingleUser />} />
          <Route path='/users/list' element={<UsersList />} />
    </Routes>
  </Router>
  )
}

export default AppRoutes
