import CartContext from "./CartContext";
import { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Loading from "./Loading";
import NetworkError from "./NetworkError";
import { v4 as uuidv4 } from 'uuid';
const Cart = () => {
    const {cart, setCart} = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
    
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data.filter(product => Object.keys(cart).includes(String(product.id)))))
            .catch(error => setError(error))
            .finally(() => setLoading(false))

    }, [cart])


        if (loading) return <Loading />;
        if (error) return <NetworkError />;

    return (
        <div className="container">
        <Header />
            <main>
            {Object.keys(products).length}
            {Object.keys(cart).length > 0 ? products.map(product => {
                return (<div className="cart-product" key={uuidv4()}>
            <div className="product-title">{product.title}</div>
            <div className="product-category">{product.category}</div>
            <div className="product-description">{product.description}</div>
            <img src={product.image} alt={product.title} className="product-image"/>
            </div>)
        }): <h2>Empty Cart</h2>}
            </main>
        </div>
    )

}

export default Cart;