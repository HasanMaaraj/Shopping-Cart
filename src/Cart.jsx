import CartContext from "./CartContext";
import { useContext, useEffect, useState } from "react";
import Header from "./Header";
const Cart = () => {
    const {cart, setCart} = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const urls = []

    Object.keys(cart).forEach(product => {
        urls.push(`https://fakestoreapi.com/products/${product}`);
    })

    useEffect(() => {
        urls.forEach(url => {
            fetch(url)
                .then(response => response.json())
                .then(data => setProducts([...products, data]))
        })
    }, [])

    useEffect(() => {
        if (products.length === Object.keys(cart).length) setLoading(false)
    }, [products, cart])

    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p>Loading...</p>;

    return (
        <>
        <Header />
            
            {products.length > 1 ? products.map(product => {
            return (<>
            <div className="product-title">{product.title}</div>
            <div className="product-category">{product.category}</div>
            <div className="product-description">{product.description}</div>
            <img src={product.image} alt={product.title} className="product-image"/>
            </>)
        }): <h2>Empty Cart</h2>}
        </>
    )

}

export default Cart;