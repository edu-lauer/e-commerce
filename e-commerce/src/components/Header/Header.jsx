import "./header.scss"
import logoDnc from "../../assets/dnc-logo.svg"

import React from 'react'

const Header = () => {
    return (
        <section className="header">
            <img src={logoDnc} alt="logo da escola dnc" />
        </section>
    )
}

export default Header