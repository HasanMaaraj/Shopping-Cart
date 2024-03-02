import Header from "./Header";
import Footer from "./Footer";

const Loading = () => {
    return (
        <div className="container">
            <Header />
            <main>
            <p>Loading...</p>
            </main>
            <Footer />
        </div>
    )
}

export default Loading;