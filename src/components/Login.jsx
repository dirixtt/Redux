import React, { useEffect, useState } from 'react'
import { Input } from '../ui'
import { useDispatch, useSelector } from 'react-redux'
import { signUserFailture, signUserStart, signUserSucces } from '../slice/Auth'
import Loader from './Loader'
import AuthService from '../service/auth'
import Validationerror from './Validation-error'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const { isLoading, loggedIn } = useSelector(state => state.auth)
  const navigate = useNavigate()
  const loginHandler = async e => {
    e.preventDefault()
    dispatch(signUserStart())
    const user = { email, password }
    try {
      const response = await AuthService.userLogin(user)
      navigate("/")
      dispatch(signUserSucces(response.user))
    } catch (error) {
      dispatch(signUserFailture(error))
    }

  }
  useEffect(() => {
    if (loggedIn) {
      navigate("/")
    }
  }, [loggedIn])
  return (
    <div className='text-center flex flex-col justify-center items-center h-[91vh]'>
      <main className="w-[25%] m-auto  ">
        <form className='flex flex-col justify-center items-center'>
          <img className="mb-4" src="https://1000logos.net/wp-content/uploads/2020/10/Alan-Walker-Logo-2013.png" alt="" width="72" height="57" />
          <h1 className="h3 mb-3 text-[#F8EDE3] fw-normal">Please log in</h1>
          <Validationerror />
          <Input label={"Email"} type={"email"} state={email} setState={setEmail} />
          <Input label={"Password"} type={"password"} state={password} setState={setPassword} />



          <button
            disabled={isLoading}
            onClick={loginHandler}
            className="w-100 bg-blue-600 btn-lg text-[#F8EDE3] mt-3"
            type="submit"
          >
            {isLoading ? <Loader /> : 'Log in'}
          </button>
          <p className="mt-5 mb-3 text-muted">© 2017–2023</p>
        </form>

      </main>
    </div>
  )
}
