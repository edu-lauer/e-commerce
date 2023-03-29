import "./header.scss"
import React from 'react'
import logoDnc from '../../assets/dnc-logo.svg'
import searchLogo from '../../assets/search.png'
import shoppCart from '../../assets/shopping-cart.svg'
import { useNavigate } from "react-router-dom"

const Header = () => {

    const navigate = useNavigate()

    const imgGoHome = () => {
        navigate('/home')
    }

    return (
        <section className="header">
            <div className="header__superior">
                <img onClick={imgGoHome} src={logoDnc} alt="logo da escola dnc" className="header__superior-logo" />
                <div className="header__input-container">
                    <img src={searchLogo} alt="lupa de busca" className='header__search-logo' />
                    <input type="text" placeholder='Search' />
                </div>
                <img src={shoppCart} alt="carrinho de compras" className="header__carrinho-logo" />
            </div>
            <div className="header__navbar">
                <nav>
                    <a href="">Novidades</a>
                    <a href="">Jogos</a>
                    <a href="">Video Games</a>
                    <a href="">Mesas Gamer</a>
                    <a href="">Promoções</a>
                    <a href="">Atendimento</a>
                </nav>
            </div>
        </section>
    )
}

export default Header