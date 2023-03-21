import "./card.scss"
import React from 'react'

const Card = ({ data }) => {
    return (
        <section className="card">
            <div>
                <img src={data.imgPath} alt={data.title} />
                <p>{data.title}</p>
                <button>Ver mais</button>
            </div>
        </section>
    )
}

export default Card