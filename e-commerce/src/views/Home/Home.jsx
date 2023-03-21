import "./home.scss"
import React from 'react'
import { Link } from "react-router-dom"
import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'
import mainImg from '../../assets/main-image.svg'

const Home = () => {
    return (
        <section className="home">
            <Header />
            <img className="home__main-img" src={ mainImg } alt="Imagem propagando do jogo, forbidden west, de playstation 4." />
            <div>
                <Card />
            </div>
        </section>
    )
}

export default Home