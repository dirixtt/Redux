import React, { useEffect, useState } from 'react'
import { Input } from '../ui'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import {  signUserFailture, signUserStart, signUserSucces } from '../slice/Auth'
import AuthService from '../service/auth'
import Validationerror from './Validation-error'
import { useNavigate } from 'react-router-dom'
export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isLoading, loggedIn } = useSelector(state => state.auth)



  const registerHandler = async e => {
    e.preventDefault()
    dispatch(signUserStart())
    const user = {
      username: name,
      email,
      password
    }
    try {
      const response = await AuthService.userRegister(user)
      console.log(response)
      console.log(user)
      dispatch(signUserSucces(response.user))
      navigate("/")
    } catch (error) {

      dispatch(signUserFailture(error.response.data.errors))

    }
  }
  useEffect(() => {
    if (loggedIn) {
      navigate("/")
    }
  }, [loggedIn])
  return (
    <div className='text-center'>
      <main className="form-signin mt-5 w-25 m-auto h-100">
        <form>
          <img className="mb-4" src="https://1000logos.net/wp-content/uploads/2020/10/Alan-Walker-Logo-2013.png" alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <Validationerror />
          <Input label={"Username"} type={"text"} state={name} setState={setName} />
          <Input label={"Email address"} type={"email"} state={email} setState={setEmail} />
          <Input label={"Password"} type={"password"} state={password} setState={setPassword} />



          <button
            disabled={isLoading}
            onClick={registerHandler}
            className="w-100 btn btn-lg btn-primary mt-3"
            type="submit"
          >
            {isLoading ? <Loader /> : 'Register'}
          </button>
          <p className="mt-5 mb-3 text-muted">© 2017–2023</p>
        </form>
      </main>
    </div>
  )
}
