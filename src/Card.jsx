import { Link } from "react-router-dom"

const Card = ({ product }) => {
    return (
        <div className="card">
            <Link to={`/product/${product.id}`} >
                    <div>{product.title}</div>
                    <div>{product.category}</div>
                    <div>{product.description}</div>
                    <img src={product.image} alt={product.title} />
            </Link>
                    <input type="number" />
                    <button>Add to Cart</button>
        </div>
    )
}

export default Card;