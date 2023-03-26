import "./checkOut.scss"
import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom'

const CheckOut = ({ data }) => {

    const { checkOutId } = useParams()
    const selectedProduct = data.find((product) => product.id == checkOutId)

    return (
        <div className="check-out">
            <Header />
            <h1>Finalizar compras</h1>
            <form className="check-out__form">
                <label htmlFor="" className="check-out__form-label">Digite seu nome:</label>
                <input type="text" className="check-out__form-input" placeholder="Nome completo"/>
                <label htmlFor="" className="check-out__form-label">Digite seu CPF:</label>
                <input type="text" className="check-out__form-input" placeholder="XXX.XXX.XXX-XX"/>
                <label htmlFor="" className="check-out__form-label">Endereço:</label>
                <input type="text" className="check-out__form-input" placeholder="Endereço residencial"/>
                <label htmlFor="" className="check-out__form-label">Forma de Pagamento:</label>
                <input type="text" className="check-out__form-input" placeholder="Escolha forma de pagamento"/>
                <button type='submit'>
                    <Link to={"/"}>Confirmar Pedido</Link>
                </button>
            </form>
            <Footer />  
        </div>
    )
}

export default CheckOut