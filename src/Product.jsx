import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartContext from "./CartContext";
import Header from "./Header";
import Loading from "./Loading";
import NetworkError from "./NetworkError";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const {cart, setCart} = useContext(CartContext)

    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response=> {
            if (!response.ok) throw new Error("Server error");
            return response.json()
        })
        .then(data => setProduct(data))
        .catch(error => setError(error))
        .finally(() => setLoading(false))

    if (error) return <NetworkError />;
    if (loading) return <Loading />;

    return (
        <div className="container">
            <Header />
            <div className="app">

                <div className="product">

                    <div className="product-title">{product.title}</div>
                    <div className="product-category">{product.category}</div>
                    <div className="product-description">{product.description}</div>
                    <img src={product.image} alt={product.title} className="product-image"/>
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
            </div>
    </div>
    )
};

export default Product;