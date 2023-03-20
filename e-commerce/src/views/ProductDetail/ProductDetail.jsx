import "./productDetail.scss"
import React from 'react'
import { Link } from "react-router-dom"

const ProductDetail = () => {
    return (
        <div>
            <h1>Product Detail</h1>
            <button type='submit'>
                <Link to={"/shoppingcart"}>Shopping Cart</Link>
            </button>
        </div>
    )
}

export default ProductDetail