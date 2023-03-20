import "./home.scss"
import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <button type='submit'>
                <Link to={"/productdetail"}>Product Detail</Link>
            </button>
        </div>
    )
}

export default Home