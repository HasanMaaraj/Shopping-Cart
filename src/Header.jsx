import { useState, useContext } from "react"
import  CartContext  from "./CartContext"
import { Link } from "react-router-dom"


  
const Header = () => {
    const {cart, setCart} = useContext(CartContext)
    return (
        <header>
            <h2>{Object.keys(cart).length}</h2>
            <h2>{...Object.keys(cart)}</h2>
            <h2>{...Object.values(cart)}</h2>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart</Link>
        </header>
    )
}

export default Header