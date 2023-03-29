import "./card.scss"
import React from 'react'
import { useNavigate } from "react-router-dom"

const Card = ({ data }) => {

    const navigate = useNavigate()

    const goTo = () => {
        navigate(`/productDetail/${data.id}`)
    }

    return (
        <section className="card">
            <div>
                <img src={data.imgPath} alt={data.title} />
                <p>{data.title}</p>
                <button onClick={goTo}>Ver mais</button>
            </div>
        </section>
    )
}

export default Card