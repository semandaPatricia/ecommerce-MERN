import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/cart/Cart';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';

import  NavBar  from "./components/NavBar";
import PrivateRoute from './components/PrivateRoute';
import './App.css'
function App() {


  return (
    
    <BrowserRouter>
    {/* header */}
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
   
      <Route path='/cart' element={< Cart/>} />
      
      <Route element={<PrivateRoute />}>
      <Route path='/profile' element={<Profile />} />
      </Route>
    </Routes>
  </BrowserRouter>

    
  )
}

export default App
