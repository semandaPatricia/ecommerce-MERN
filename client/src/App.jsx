import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
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
      <Route path='/men' element={<Men />} />
      <Route path='/women' element={<Women />} />
      <Route path='/kids' element={<Kids />} />
   
     <Route path='/cart' element={< Cart/>} />
      
      <Route element={<PrivateRoute />}>
      <Route path='/profile' element={<Profile />} />
      </Route>
    </Routes>
  </BrowserRouter>

    
  )
}

export default App
