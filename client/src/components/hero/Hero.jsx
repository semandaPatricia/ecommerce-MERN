import React from 'react'
import { ArrowRight } from "phosphor-react";
import Pinkbikini from '../../assets/productsseiben.jpg'
//import './hero.css'
const Hero = () => {
  return (
    <div className='hero flex  '>
        <div className='hero-left flex-1 flex flex-col justify-center gap-4 p-4 '>
            <h2 className='text-black text-xl '>SEASON NEWIN</h2>
        </div>
        <div className='flex justify-center flex-1 '>
             <div className='hero-hand-icon flex items-center gap-4'>
            <p className='font-extralight'>New arrivals</p>
        </div>
        
        </div> 

       
            <button className='flex justify-center  items-center gap-3 h-10 bg-pink-300  p-3 mt-6 rounded'>Latest collection   <ArrowRight size={32} /></button>
            

        
        <div className='hero-right  flex-1 flex justify-center  p-8'>
            <img src={Pinkbikini} alt=" hero image" />

        </div>
        

    </div>
  )
}

export default Hero