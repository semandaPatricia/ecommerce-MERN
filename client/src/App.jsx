import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Cart from './pages/cart/Cart';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


import  NavBar  from "./components/NavBar";
import Footer from './components/Footer'

import PrivateRoute from './components/PrivateRoute';
import './App.css'
import ShopCategory from './pages/ShopCategory';

function App() {


  return (
    
    <BrowserRouter>
    {/* header */}
    <NavBar />
    
  
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/men' element={<ShopCategory category="men" />} />
      <Route path='/women' element={<ShopCategory category="women" />}/>
      <Route path='/kids' element={<ShopCategory category="kids" />} />
   
     <Route path='/cart' element={< Cart/>} />
     <Route path='/login' element={< LoginSignUp/>} />
    
    </Routes>
    <Footer/>
  </BrowserRouter>

    
  )
}

export default App
