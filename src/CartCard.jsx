import { useContext, useRef } from "react";
import CartContext from "./CartContext";

const CartCard = ({ product }) => {
    const {cart, setCart} = useContext(CartContext)
    const productValueRef = useRef(null)
    return (
    <div className="cart-item" id={`cart-item-${product.id}`}>
        <div className="product-title"><h2>{product.title}</h2></div>
        <div className="product-category"><h3>{product.category}</h3></div>
        <div className="product-description">{product.description}</div>
        <img src={product.image} alt={product.title} className="product-image"/>
        <div className="prices">
            <div className="item-price">Price: ${product.price}</div>
            <div className="item-total-price">Total: ${product.price*cart[product.id]}</div>
        </div>
        <div className="edit-item">

        <input type="number" id={`cart-${product.id}-value`} defaultValue={cart[product.id]} min="0" ref={productValueRef}/>
        <button onClick={() => {
            const newItemValue = parseInt(productValueRef.current.value)
            if (newItemValue > 0) {
                setCart({
                    ...cart,
                    [product.id]: parseInt(productValueRef.current.value),
                })
            } else if (newItemValue === 0) {
                const newCart = {...cart}
                delete newCart[product.id]
                setCart(newCart)
            }
        }}>Change Item Quantity</button>

        <button className="remove-btn" onClick={() => {
            const newCart = {...cart}
            delete newCart[product.id]
            setCart(newCart)
        }}>Remove From Cart</button>
        </div>
    </div>)
}

export default CartCard;

