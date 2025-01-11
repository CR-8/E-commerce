import React from 'react'

export default function Tabs() {
  return (
    <div className='w-full overflow-x-hidden h-[2.5rem] flex items-center justify-center border-b-2 border-gray-200'>
        <div className='flex w-[70rem] justify-between items-center '>
            <h2 className='text-md cursor-pointer font-semibold hover:text-orange-500 transition-colors'> Discounted Items </h2>
            <h2 className='text-md cursor-pointer font-semibold hover:text-orange-500 transition-colors'> Best Sellers </h2>
            <h2 className='text-md cursor-pointer font-semibold hover:text-orange-500 transition-colors'> Winter Essentials </h2>
            <h2 className='text-md cursor-pointer font-semibold hover:text-orange-500 transition-colors'> New Arrivals </h2>
            <h2 className='text-md cursor-pointer font-semibold hover:text-orange-500 transition-colors'> Limited Essentials </h2>
            <h2 className='text-md cursor-pointer font-semibold hover:text-orange-500 transition-colors'> On Sale </h2>
        </div>
    </div>
  )
}
