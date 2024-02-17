import { useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response=> {
            if (!response.ok) throw new Error("Server error");
            return response.json()
        })
        .then(data => setProduct(data))
        .catch(error => setError(error))
        .finally(() => setLoading(false))

    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p>Loading...</p>;

    return (
        <div className="product">
                <div>{product.title}</div>
                <div>{product.category}</div>
                <div>{product.description}</div>
                <img src={product.image} alt={product.title} />
                <input type="number" />
                <button>Add to Cart</button>
    </div>
    )
};

export default Product;