import { removeItem } from '../helpers/persistance-storage'
import React from 'react'
import {logoutUser} from '../slice/Auth'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const { loggedIn, user } = useSelector(state => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logoutHandler = () => {
        removeItem("token")
        dispatch(logoutUser())
        navigate("/login")
    }
    return (
        <div>
            <div className="flex p-2 items-center bg-[#F8EDE3]  ">
                <Link to={"/"} className="d-flex align-items-center text-dark text-decoration-none">
                    <img src="https://1000logos.net/wp-content/uploads/2020/10/Alan-Walker-Logo-2013.png" alt="" width="68" height="50" />
                    <span className="fs-4">Aqua Wise</span>
                </Link>

                <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    {loggedIn ? (
                        <>
                            <p className="m-0 font-monospace fs-5 d-flex me-2 text-capitalize align-items-center text-center bd-highlight">
                                {user.username}
                            </p>
                            <button onClick={logoutHandler} className="btn btn-danger">log out</button>
                        </>
                    ) : (
                        <>
                            <Link className="me-3 py-2 text-dark text-decoration-none" to="/login">Login</Link>
                            <Link className="me-3 py-2 text-dark text-decoration-none" to="/register">Register</Link></>
                    )}


                </nav>
            </div >
        </div >
    )
}
