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
            {Object.keys(cart).length > 0 ? <div className="cart">
            {products.map(product => {
                return (<div className="cart-item" id={`cart-item-${product.id}`}  key={uuidv4()}>
            <div className="product-title"><h2>{product.title}</h2></div>
            <div className="product-category"><h3>{product.category}</h3></div>
            <div className="product-description">{product.description}</div>
            <img src={product.image} alt={product.title} className="product-image"/>
            <div className="prices">
                <div className="item-price">Price: ${product.price}</div>
                <div className="item-total-price">Total: ${product.price*cart[product.id]}</div>
            </div>
            <div className="edit-item">

            <input type="number" id={`cart-${product.id}-value`} defaultValue={cart[product.id]}/>
            <button onClick={() => {
                setCart({
                    ...cart,
                    [product.id]: parseInt(document.getElementById(`cart-${product.id}-value`).value),
                })
            }}>Change Item Quantity</button>

            <button className="remove-btn" onClick={() => {
                const newCart = {...cart}
                delete newCart[product.id]
                setCart(newCart)
            }}>Remove From Cart</button>
            </div>
            </div>)
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