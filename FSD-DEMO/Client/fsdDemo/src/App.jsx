import { useState } from 'react'
import './App.css'
import { Base } from './Base/Base.jsx'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard.jsx'
import Profile from './Pages/Profile.jsx'
import AddPage from './Pages/AddPage.jsx'
import EditPage from './Pages/EditPage.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import SignUp from './Pages/SignUp.jsx'

function App() {
  //react router dom
  //materialui
  return (
    <>
     <Routes>
      <Route exact path="/" element={<Dashboard/>}/>
      <Route  path="/user"  element={<Profile/>}/>
      <Route  path="/user/add" element={<AddPage/>}/>
      <Route  path="/user/edit/:id" element={<EditPage/>}/>
      <Route exact path="/login" element={<LoginPage/>}/>
      <Route exact path="/register" element={<SignUp/>}/>
     </Routes>
    </>
  )
}

export default App
