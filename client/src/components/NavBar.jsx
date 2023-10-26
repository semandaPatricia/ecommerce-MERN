import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

const NavBar = () => {
  return (
    <div>
      <div>
        <h1> p-markt</h1>
      </div>
      <div>
      <Link to="/">Shop</Link>
      <Link to="/cart">Cart<ShoppingCart size={32} /></Link>
      <Link to="/profile">Profile</Link>
     
      </div>
    </div>
  )
}

export default NavBar
