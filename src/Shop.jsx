import { useEffect, useState, useContext, createContext } from "react";
import Card from "./Card";
import  CartContext  from "./CartContext";
import Header from "./Header";
import Loading from "./Loading";
import NetworkError from "./NetworkError";

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


        if (error) return <NetworkError />;
        if (loading) return <Loading />;

    return (
        <div>
            <Header />
                {products.map(product => {
                    return (
                        <Card product={product} key={product.id}/>
                        )
                    })}
        </div>
    )
};

export default Shop;