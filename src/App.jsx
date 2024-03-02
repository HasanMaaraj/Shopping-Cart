import './App.css'
import { Link } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
function App() {

  return (
    <div className='container'>
    <Header />
    <main>
      <h1>
      <Link to='/shop'>shop</Link>
      </h1>
    </main>
    <Footer />
    </div>
  )
}

export default App;