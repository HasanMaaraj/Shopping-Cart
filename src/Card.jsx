import { useContext } from "react";
import { Link } from "react-router-dom"
import  CartContext  from "./CartContext";

const Card = ({ product }) => {
    const {cart, setCart} = useContext(CartContext);
    
    return (
        <div className="card">
            <Link to={`/product/${product.id}`} >
            <div className="product-title">{product.title}</div>
            <div className="product-category">{product.category}</div>
            <div className="product-description">{product.description}</div>
            <img src={product.image} alt={product.title} className="product-image"/>
            </Link>
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
    )
}

export default Card;