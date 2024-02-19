import { useState, useContext } from "react"
import  CartContext  from "./CartContext"


  
const Header = () => {
    const {cart, setCart} = useContext(CartContext)
    return (
        <header>
            <h2>{Object.keys(cart).length}</h2>
            <h2>{...Object.keys(cart)}</h2>
            <h2>{...Object.values(cart)}</h2>
        </header>
    )
}

export default Header