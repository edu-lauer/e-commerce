import "./checkOut.scss"
import React from 'react'
import { Link } from "react-router-dom"

const CheckOut = () => {
    return (
        <div>
            <h1>Check Out</h1>
            <button type='submit'>
                <Link to={"/"}>Volta para Login</Link>
            </button>
        </div>
    )
}

export default CheckOut