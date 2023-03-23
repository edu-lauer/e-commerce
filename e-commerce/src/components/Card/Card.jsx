import "./card.scss"
import React from 'react'
import { Link } from "react-router-dom"

const Card = ({ data }) => {
    return (
        <section className="card">
            <div>
                <img src={data.imgPath} alt={data.title} />
                <p>{data.title}</p>
                <button>
                    <Link to={`/productDetail/${data.id}`}>Ver mais</Link>
                </button>
            </div>
        </section>
    )
}

export default Card