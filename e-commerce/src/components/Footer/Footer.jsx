import "./footer.scss"
import logoDncFooter from '../../assets/logo-dnc-footer.svg'

import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <img src={logoDncFooter} alt="logo da escola dnc" />
            <p>Preços e condições de pagamento exclusivos para compras via internet e podem variar nas lojas físicas. <strong>Para mais informações</strong>, entre em contato: (011) 1111-2222</p>
        </div>
    )
}

export default Footer