import React from 'react'
import dataProduct from '../assets/data'
import Items from '../components/Items'


const Popular = () => {
 
  return (
    <div className='popular flex flex-col items-center gap-3 h-36'>
        <h1 className=' text-slate-600 text-2xl'>POPULAR IN WOMEN</h1>
    <hr  className=' w-56 bg-slate-500'/>
    <div className='popular-item mt-4'>
        {dataProduct.map((item,i)=>{
            return <Items key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
    </div>

    </div>
  )
}

export default Popular
