import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const ErrorPage = () => {
  return (
    <div className="container">
    <Header />
    <main>
        <p>This route doesn't exist</p>
        <Link to="/">
        You can go back to the home page by clicking here, though!
        </Link>
    </main>
    <Footer />
</div>
  );
};

export default ErrorPage;