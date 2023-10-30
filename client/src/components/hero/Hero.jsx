import React from "react";
import { ArrowRight } from "phosphor-react";
import Pinkbikini from "../../assets/productsseiben.jpg";
//import './hero.css'
const Hero = () => {
  return (
    <div className="hero flex  ">
      <div className="hero-left flex flex-col justify-center items-center">
        <div className=" flex-1 flex flex-col justify-center gap-4 p-2 m-5">
          <h2 className="text-black text-xl ">SEASON NEWIN</h2>
          <p className="mt-7"> New arrivals</p>
        </div>
        
        <button className="flex justify-center  items-center gap-3 h-10 bg-pink-300  p-3 mt-6 rounded">
          Latest collection <ArrowRight size={32} />
        </button>
      </div>

      <div className="hero-right flex-1 flex justify-center items-center p-3 ">
        <img
          src={Pinkbikini}
          alt="Hero Image"
          className="w-1/2 mt-10 mr-4 h-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
