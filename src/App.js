import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Chat, Main, Login, Register, Navbar } from './components'
import AuthService from './service/auth'
import { useDispatch } from 'react-redux'
import { signUserSucces } from './slice/Auth'
import { getItem } from 'localforage'
export default function App() {
  const dispatch = useDispatch()
  const getUser = async () => {
    try {
      const response = await AuthService.getUser()
      dispatch(signUserSucces(response.user))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    const token = getItem("token")
    if (token) {

      getUser()
    }
  }, [])
  return (
    <div className='p-4 min-h-screen bg-[#798777]'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </div>
  )
}
