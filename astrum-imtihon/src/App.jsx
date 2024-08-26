
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Main from './pages/Main'
import Cars from './pages/Cars'
import Cart from './pages/Cart'
import Footer from './pages/Footer'


function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='cars' element={<Cars />}/>
        <Route path='cart' element={<Cart />}/> 
      </Routes>
      <Footer />
    </div>
      
  )
}

export default App
