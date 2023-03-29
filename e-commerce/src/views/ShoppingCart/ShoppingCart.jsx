import './shoppingCart.scss'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const ShoppingCart = ({ data }) => {

    const { shoppingCartId } = useParams()
    const selectedProduct = data.find((product) => product.id == shoppingCartId)

    const navigate = useNavigate()
    const goToHome = () => {
        navigate(`/home`)
    }

    const goTo = () => {
        navigate(`/checkout/${selectedProduct.id}`)
    }

    const customStyles = {
        content: {
            top: "50%", 
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            width: "80%",
            borderRadius: "3rem",
        },
        meuCarrinho: {
            color: "blue",
            marginBottom: "2rem",
            textAlign: "left",
            padding: "1rem",
        },
        finalizarCompraBtn: {
            backgroundColor: "#676767",
            marginTop: "2rem",
        },
        continuarCompraBtn: {
            marginTop: "2rem",
            color: "white"
        }
    };


    return (
        <div className='shoppingCart'>
            <Header />
            <div className="product-detail">
                <div className="product-detail__container">
                    <div className="product-detail__container-left-side">
                        <img src={selectedProduct.imgPathDetail} alt={selectedProduct.title} />
                    </div>
                    <div className="product-detail__container-right-side">
                        <h1 style={customStyles.meuCarrinho}>Meu Carrinho</h1>
                        <h2 className="product-detail__container-right-side-title">{selectedProduct.title}</h2>
                        <h3 className="product-detail__container-right-side-price">{selectedProduct.price}</h3>
                        <p hidden={selectedProduct.colors.length === 0}>
                            Cor:{" "}
                            {selectedProduct.colors.length === 1
                                ? selectedProduct.colors.map((color, index) => (
                                    <span key={index}>{color}</span>
                                ))
                                : selectedProduct.colors.map((color, index) =>
                                    index + 1 === selectedProduct.colors.length ? (
                                        <span key={index}>{color}</span>
                                    ) : (
                                        <span key={index}>{color}, </span>
                                    )
                                )}
                        </p>
                        <div className="product-detail__cube-colors">
                            {selectedProduct.colors.map((color, index) => (
                                <div key={index}
                                    style={{
                                        borderRadius: "10px",
                                        backgroundColor: color,
                                    }}
                                ></div>
                            ))}
                        </div>
                        <button onClick={goToHome} style={customStyles.continuarCompraBtn}>Continuar comprando</button>
                        <button onClick={goTo} style={customStyles.finalizarCompraBtn}>Finalizar compra</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ShoppingCart