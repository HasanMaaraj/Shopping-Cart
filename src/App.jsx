import './App.css'
import { Link } from 'react-router-dom'
import Header from './Header';

function App() {

  return (
    <div className='container'>
    <Header />
    <div className="app">
      <h1>
      <Link to='/shop'>shop</Link>
    </h1>
    </div>
    </div>
  )
}

export default App;