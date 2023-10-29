
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { useState } from "react";

const NavBar = () => {
  const[menu,setMenu] = useState("shop")
  return (
    <header className="">
<nav className="flex bg-black text-white  items-center p-4 justify-around ">
      <div>
        <h1 className="text-blue-500"> GONE</h1>
      </div>
      <div className="hidden md:flex p-2 mr-4 flex-row gap-4 items-center cursor-pointer"> 
        <Link to="/" onClick={()=>{setMenu("shop")}}>Shop{menu === "shop" ?<hr className="h-px bg-red-300 my-2 border-0 dark:bg-gray-700 w"/> :<></>} </Link>
        <Link to="/men" onClick={()=>{setMenu("men")}}>Men{menu === "men" ?<hr className="h-px bg-red-300 my-2 border-0 dark:bg-gray-700 w"/> :<></>} </Link>
        <Link to="/women" onClick={()=>{setMenu("women")}}>Women{menu === "women" ?<hr className="h-px bg-red-300 my-2 border-0 dark:bg-gray-700 w"/> :<></>} </Link>
        <Link to="/kids" onClick={()=>{setMenu("kids")}}>kids {menu === "kids" ?<hr className="h-px bg-red-300 my-2 border-0 dark:bg-gray-700 w"/> :<></>} </Link>
       
        <Link to="/profile" onClick={()=>{setMenu("profile")}}>Profile{menu === "profile" ?<hr className="h-px bg-red-300 my-2 border-0 dark:bg-gray-700 w"/> :<></>} </Link>
      </div >
      <div className="flex gap-5">
      <Link to="/cart"><ShoppingCart size={32} /></Link>
    <Link to="/login" > <button className="md:bg-blue-500 md:hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Login</button></Link>  
      
      </div>
      
    </nav>
    </header>
    
  );
};

export default NavBar;