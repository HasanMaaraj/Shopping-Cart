import CartContext from "./CartContext";
import { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Loading from "./Loading";
import NetworkError from "./NetworkError";

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
                .then(response => {
                    if (!response.ok) throw new Error("Server error");
                    return response.json()
                })
                .then(data => setProducts([...products, data]))
        })
    }, [])

    useEffect(() => {
        if (products.length === Object.keys(cart).length) setLoading(false)
    }, [products, cart])

    if (error) return <NetworkError />;
    if (loading) return <Loading />;

    return (
        <div className="container">
        <Header />
            <main>

            {products.length > 1 ? products.map(product => {
                return (<>
            <div className="product-title">{product.title}</div>
            <div className="product-category">{product.category}</div>
            <div className="product-description">{product.description}</div>
            <img src={product.image} alt={product.title} className="product-image"/>
            </>)
        }): <h2>Empty Cart</h2>}
            </main>
        </div>
    )

}

export default Cart;