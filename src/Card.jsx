import { useContext } from "react";
import { Link } from "react-router-dom"
import  CartContext  from "./CartContext";

const Card = ({ product }) => {
    const {cart, setCart} = useContext(CartContext);
    
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

            <div className="card-footer">
                    <input type="number" id={product.id}/>
                    <button onClick={ () => {
                        const placedItems = parseInt(document.querySelector(`input[id="${product.id}"]`).value);
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