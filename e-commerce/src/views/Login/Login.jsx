import "./login.scss"
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import logoDnc from "../../assets/dnc-logo.svg"


const Login = () => {

    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')
    const [msgCpf, setMsgCpf] = useState('')
    const [msgPassword, setMsgPassword] = useState('')

    const navigate = useNavigate()

    const validade = () => {
        if (cpf == '') {
            setMsgCpf('Campo obrigatório')
        }
        if (cpf.length != 11) {
            setMsgCpf('CPF deve conter 11 digitos')
        }
        if (isNaN(+cpf)) {
            setMsgCpf('Campo CPF deve ser numérico')
        }
        if (cpf != '' && cpf.length == 11 && !isNaN(+cpf)) {
            setMsgCpf('')
        }
        if (password == '') {
            setMsgPassword('Campo obrigatório')
        }
        if (password.length < 6) {
            setMsgPassword('Senha Inválida')
        }
        if (password != '' && password.length >= 6) {
            setMsgPassword('')
        }
        if (cpf != '' && cpf.length == 11 && !isNaN(+cpf) && password != '' && password.length >= 6){
            navigate("/home")
        }
    }


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
                    <input
                        type="text"
                        placeholder="cpf completo"
                        id="cpf"
                        className="login__input-cpf"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value.trim())}>
                    </input>
                    <span>{msgCpf}</span>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        placeholder="********"
                        id="password"
                        className="login__input-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value.trim())}>
                    </input>
                    <span>{msgPassword}</span>
                </div>
                <button type='submit' onClick={validade}>Entrar</button>
            </section>
        </section>
    )
}

export default Login