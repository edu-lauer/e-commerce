import "./login.scss"
import React from 'react'
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <button type='submit'>
                <Link to={"/home"}>Entrar</Link>
            </button>
        </div>
    )
}

export default Login