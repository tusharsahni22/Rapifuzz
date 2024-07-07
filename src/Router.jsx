import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import "./App.css"
import Singup from './Components/Signup'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import ResetPaasword from './Components/ResetPassword'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Singup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/reset-password" element={<ResetPaasword/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router