import React from 'react'

const Items = () => {
  return (
    <div className='item w-56'>
        <img src={props.image} alt="" />
        <p className='m-2'>{props.name}</p>
        <div>
            <div className=' items-prices flex gap-6'>
                <div className='items-price-new text-slate-500 text-xl'>
                    {props.new_price}

                </div>
                <div className=' item-price-old text-slate-400 font-semibold text-xl 	text-decoration-line: line-through hover:default:'>
                {props.old_price}
                </div>

            </div>
        </div>
    </div>
  )
}

export default Items