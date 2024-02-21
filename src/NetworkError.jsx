import Header from "./Header";
import { Link } from "react-router-dom";

const NetworkError = () => {
    return (
        <div className="container">
            <Header />
            <div className="app">
                <p>A network error was encountered</p>
                <Link to="/">
                You can go back to the home page by clicking here, though!
                </Link>
            </div>
        </div>
    )
}

export default NetworkError;