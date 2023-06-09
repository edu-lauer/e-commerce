import "./productDetail.scss"
import React from 'react'
import { useNavigate } from "react-router-dom"
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import carrinhoCompras from "../../assets/shopping_cart.png"

const ProductDetail = ({ data }) => {
    const { productId } = useParams()
    const selectedProduct = data.find((product) => product.id == productId)

    const navigate = useNavigate()
    const goTo = () => {
        navigate(`/shoppingcart/${selectedProduct.id}`)
    }

    return (
        <div className="product-detail">
            <Header />
            <div className="product-detail__container">
                <div className="product-detail__container-left-side">
                    <img src={selectedProduct.imgPath} alt={selectedProduct.title} />
                    <p className="product-detail__container-left-side-title">{selectedProduct.title}</p>
                    <h2>Descrição:</h2>
                    <p className="product-detail__container-left-side-decription">{selectedProduct.description}</p>
                </div>
                <div className="product-detail__container-right-side">
                    <h1 className="product-detail__container-right-side-title">{selectedProduct.title}</h1>
                    <h2 className="product-detail__container-right-side-price">{selectedProduct.price}</h2>
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
                    <button onClick={goTo}>
                        <img src={carrinhoCompras}></img>
                        Adicionar ao carrinho
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductDetail