
import React from 'react'
import { CiSearch, CiUser, CiShoppingCart } from "react-icons/ci"
import { FaHeart } from "react-icons/fa"

export default function Navbar() {
  const leftLinks = [
    { title : 'Women' , href: '/'},
    { title : 'Men' , href: '/'}, 
    { title : 'About us' , href: '/'} 
  ] 
  const rightLinks = [
    { icon: CiSearch, label: 'Search' , href: '/' },
    { icon: CiUser, label: 'Sign in', href: '/signin' },
    { icon: FaHeart, label: 'Saved', href: '/' },
    { icon: CiShoppingCart, label: 'Cart' , href: '/cart' }
  ]

  return (
    <div className='w-full overflow-x-hidden'>
    <div className='bg-white text-black sticky top-0 py-4 h-[3.5rem] flex justify-between items-center border-b'>
      <div className='flex justify-evenly w-[20rem] items-center'>
        {leftLinks.map((link) => (
          <h2
            key={link.title}
            className='text-md cursor-pointer font-semibold hover:text-orange-500 transition-colors'
          >
            <a href={link.href}>{link.title}</a>
          </h2>
        ))}
      </div>
      <h1 className='text-2xl font-bold'>ECOVOGUE</h1>
      <div className='flex justify-around w-[24rem] mr-7 items-center'>
        {rightLinks.map(({ icon: Icon, label, href }) => (
          <div
            className='flex items-center ml-2 cursor-pointer hover:text-orange-500 transition-colors'
            key={label}
          >
            <Icon className='text-lg font-semibold mr-1' />
            <h3><a href={href}>{label}</a></h3>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}