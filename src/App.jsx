import './App.css'
import { Link } from 'react-router-dom'
import Header from './Header';

function App() {

  return (
    <div className='container'>
    <Header />
    <main>
      <h1>
      <Link to='/shop'>shop</Link>
    </h1>
    </main>
    </div>
  )
}

export default App;