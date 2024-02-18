import { useEffect, useState, useContext, createContext } from "react";
import Card from "./Card";


export const CartContext = createContext({
    cart: {},
    setCart: () => {},
  })


const Shop = () => {

    const [cart, setCart] = useState({})
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
            <h2>{Object.keys(cart).length}</h2>
            <h2>{...Object.keys(cart)}</h2>
            <h2>{...Object.values(cart)}</h2>
            
            <CartContext.Provider value={{cart, setCart}}>

                {products.map(product => {
                    return (
                        <Card product={product} key={product.id}/>
                        )
                    })}
            </CartContext.Provider>
        </div>
    )
};

export default Shop;