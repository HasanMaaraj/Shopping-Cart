import { Link } from "react-router-dom"

const Card = ({ product }) => {
    return (
        <div className="card">
                    <div>{product.title}</div>
                    <div>{product.category}</div>
                    <div>{product.description}</div>
                    <img src={product.image} alt={product.title} />
        </div>
    )
}

export default Card;