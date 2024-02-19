import { useEffect, useState, useContext, createContext } from "react";
import Card from "./Card";
import  CartContext  from "./CartContext";


const Shop = () => {

    const [products, setProducts] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            fetch('https://fakestoreapi.com/products')
                .then(response => {
                    if (!response.ok) throw new Error("Server error");
                    return response.json()
                })
                .then(data => setProducts(data))
                .catch(error => setError(error))
                .finally(() => setLoading(false))
            
        }, [])


        if (error) return <p>A network error was encountered</p>;
        if (loading) return <p>Loading...</p>;

    return (
        <div>
                {products.map(product => {
                    return (
                        <Card product={product} key={product.id}/>
                        )
                    })}
        </div>
    )
};

export default Shop;