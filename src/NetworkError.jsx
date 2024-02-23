import Header from "./Header";
import { Link } from "react-router-dom";

const NetworkError = () => {
    return (
        <div className="container">
            <Header />
            <main>
                <p>A network error was encountered</p>
                <Link to="/">
                You can go back to the home page by clicking here, though!
                </Link>
            </main>
        </div>
    )
}

export default NetworkError;