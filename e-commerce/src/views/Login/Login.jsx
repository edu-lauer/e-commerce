import "./login.scss"
import React from 'react'
import { Link } from "react-router-dom"
import Header from '../../components/Header/Header'

const Login = () => {
    return (
        <section className="login">
            <Header />
            <section className="login__form">
                <h1></h1>
                <h2></h2>
                <div className="login__input-form">
                    <label htmlFor="cpf">Digite seu CPF:</label>
                    <input type="text" placeholder="cpf completo" id="cpf" className="login__input-cpf"></input>
                    <label htmlFor="password">Digite seu CPF:</label>
                    <input type="password" placeholder="********" id="password" className="login__input-password"></input>
                </div>
                <button type='submit'>
                    <Link to={"/home"}>Entrar</Link>
                </button>

            </section>
        </section>
    )
}

export default Login