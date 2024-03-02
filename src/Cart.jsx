import CartContext from "./CartContext";
import { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Loading from "./Loading";
import NetworkError from "./NetworkError";
import { v4 as uuidv4 } from 'uuid';
import CartCard from "./CartCard";

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
            {Object.keys(cart).length > 0 ? <div className="cart">
            {products.map(product => {
                return <CartCard product={product} key={uuidv4()} />
            }
        )}
        
        <div className="payment">
        <div>
            Total: {(products.reduce((prev, product) => {
                return prev + cart[product.id]*product.price
            },0)).toFixed(2)}   
        </div>
        <button>Make payment</button>
        </div>

        </div>: <h2>Empty Cart</h2>}
            </main>
        </div>
    )

}

export default Cart;