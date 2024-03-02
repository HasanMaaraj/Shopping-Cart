import { useState, useContext } from "react"
import  CartContext  from "./CartContext"
import { Link } from "react-router-dom"


  
const Header = () => {
    const {cart, setCart} = useContext(CartContext)
    return (
        <header>
            <h1>Hasan's Fake Shop</h1>
            <div className="links">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart {Object.keys(cart).length}</Link>
            </div>
        </header>
    )
}

export default Header;