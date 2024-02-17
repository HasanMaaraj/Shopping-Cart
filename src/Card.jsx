import { Link } from "react-router-dom"

const Card = ({ product }) => {
    return (
        <div className="card">
            <Link to={`/product/${product.id}`} >
            <div className="product-title">{product.title}</div>
            <div className="product-category">{product.category}</div>
            <div className="product-description">{product.description}</div>
            <img src={product.image} alt={product.title} className="product-image"/>
            </Link>
                    <input type="number" />
                    <button>Add to Cart</button>
        </div>
    )
}

export default Card;