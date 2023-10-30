import React from 'react'

const Offers = () => {
  return (
    <div className='  bg-pink-100 flex m-auto p-12 mt-8 '> 
        <div className=' flex-1 flex flex-col justify-center items-center' >
            <h2 className='text-3xl'> Exclusive </h2>
            <br />
            <p className='text-3xl'> Offers For You</p>
            <button className='bg-pink-400  m-4 p-2 rounded cursor-pointer'> Check Now</button>
        </div>
        <div className='left-side flex-1 flex items-center justify-end pt-4'>
            <img src="https://images.unsplash.com/photo-1623609163859-ca93c959b98a?auto=format&fit=crop&q=80&w=1586&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=" dress" className='' />

        </div>
        
    </div>
  )
}

export default Offers