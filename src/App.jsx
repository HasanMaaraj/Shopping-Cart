import './App.css'
import { Link } from 'react-router-dom'
import Header from './Header';

function App() {

  return (
    <>
    <Header />

    <h1>
    <Link to='/shop'>shop</Link>
    </h1>
    </>
  )
}

export default App;