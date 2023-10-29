import React from 'react'
//import data_product from '../assets/data'
import Items from '../components/Items'
const data_product = [
  {
    id: 1,
    name: 'Elegant Blouse',
    image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&q=80&w=1548&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    new_price: 59.99,
    old_price: 79.99,
  },
  {
    id: 2,
    name: 'Casual Chic Blouse',
    image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&q=80&w=1548&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    new_price: 34.95,
    old_price: 49.99,
  },
  {
    id: 3,
    name: 'Striped Classic Blouse',
    image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&q=80&w=1548&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    new_price: 45.50,
    old_price: 59.99,
  },
  {
    id: 4,
    name: 'Floral Print Blouse',
    image: 'https://images.unsplash.com/photo-1589734750443-06dbd51c0447?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    new_price: 39.99,
    old_price: 54.99,
  },
  {
    id: 5,
    name: 'Ruffled Sleeve Blouse',
    image: 'https://images.unsplash.com/photo-1589734750443-06dbd51c0447?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    new_price: 29.99,
    old_price: 39.99,
  },
  {
    id: 6,
    name: 'Lace Detail Blouse',
    image: 'https://images.unsplash.com/photo-1589734750443-06dbd51c0447?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    new_price: 55.00,
    old_price: 69.99,
  },
  {
    id: 7,
    name: 'Boho Style Blouse',
    image: 'https://images.unsplash.com/photo-1589734750443-06dbd51c0447?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    new_price: 42.99,
    old_price: 59.99,
  },
  {
    id: 8,
    name: 'Tie Neck Blouse',
    image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&q=80&w=1548&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    new_price: 37.50,
    old_price: 49.99,
  },
  {
    id: 9,
    name: 'Polka Dot Blouse',
    image: 'https://images.unsplash.com/photo-1612889002991-fbfaf775d231?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    new_price: 31.99,
    old_price: 44.99,
  },
  {
    id: 10,
    name: 'Satin Finish Blouse',
    image: 'https://images.unsplash.com/photo-1612889002991-fbfaf775d231?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    new_price: 64.99,
    old_price: 89.99,
  },
];

const Popular = () => {
 
  return (
    <div className='popular flex flex-col items-center gap-3 h-36'>
        <h1 className=' text-slate-600 text-2xl'>POPULAR IN WOMEN</h1>
    <hr  className=' w-56 bg-slate-500'/>
    <div className='popular-item mt-4'>
        {data_product.map((item,i)=>{
            return <Items key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
    </div>

    </div>
  )
}

export default Popular
