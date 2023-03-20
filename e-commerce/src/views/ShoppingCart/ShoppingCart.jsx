import './shoppingCart.scss'
import React from 'react'
import { Link } from "react-router-dom"

const ShoppingCart = () => {
    return (
        <div>
            <h1>Shopping Cart</h1>
            <button type='submit'>
                <Link to={"/checkout"}>Check Out</Link>
            </button>
        </div>
    )
}

export default ShoppingCart