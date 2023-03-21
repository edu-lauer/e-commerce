import "./login.scss"
import React from 'react'
import { Link } from "react-router-dom"
import logoDnc from "../../assets/dnc-logo.svg"

const Login = () => {
    return (
        <section className="login">
            <section className="login__header">
                <img src={logoDnc} alt="logo da escola dnc" />
            </section>
            <section className="login__form">
                <h1>Acesse com seu login ou cadastre-se!</h1>
                <h2>você pode entrar com o seu CPF</h2>
                <div className="login__input-form">
                    <label htmlFor="cpf">Digite seu CPF:</label>
                    <input type="text" placeholder="cpf completo" id="cpf" className="login__input-cpf"></input>
                    <label htmlFor="password">Senha:</label>
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