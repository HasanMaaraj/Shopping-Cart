import { useContext, useRef } from "react";
import { Link } from "react-router-dom"
import  CartContext  from "./CartContext";

const Card = ({ product }) => {
    const {cart, setCart} = useContext(CartContext);
    const productValueRef = useRef(null)
    return (
        <div className="card">
            
            <div className="card-header">
            <Link to={`/product/${product.id}`} >
            <div className="product-title">{product.title}</div>
            </Link>
            <div className="product-category">{product.category}</div>
            </div>

            <div className="card-body">
            <Link to={`/product/${product.id}`} >
            <img src={product.image} alt={product.title} className="product-image"/>
            </Link>
            <div className="product-description"><p>{product.description}</p></div>
            </div>
            <div className="product-price">${product.price}</div>
            <div className="card-footer">
                    <input type="number" id={product.id} ref={productValueRef}/>
                    <button onClick={ () => {
                        const placedItems = parseInt(productValueRef.current.value);
                        setCart(() => {
                            return {
                                ...cart,
                                [product.id]: cart[product.id] ? cart[product.id]+placedItems : placedItems
                            }
                        })
                    } }>Add to Cart</button>
            </div>
        </div>
    )
}

export default Card;