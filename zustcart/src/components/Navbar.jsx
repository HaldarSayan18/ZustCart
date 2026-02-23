import { Search, Settings2, ShoppingCart, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useCartStore } from '../store/cartStore';
import logo from '../assets/zustcart_logo.png';

export default function Navbar({ onCartClick, productsData }) {
    const cart = useCartStore(state => state.cart);
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            <nav className="fixed top-0 m-0 p-0 w-full bg-slate-800 text-white shadow-lg">
                <div className="flex justify-between items-center h-16 px-4 gap-4">
                    {/* logo */}
                    <div className="flex items-center">
                        <img src={logo} alt='logo' className='h-max w-30' />
                    </div>

                    {/* search & filter */}
                    <div className='flex items-center justify-start bg-slate-700 rounded-lg px-2 py-1 gap-2 w-full max-w-md ml-auto'>
                        {/* <Dropdown /> */}
                        <Search />
                        <input type='search' placeholder='Search essentials products and more...' className='border-b border-gray-500 outline-none w-full mr-2 p-1 h-full' />
                        <Settings2 size={25} className='' />
                    </div>

                    {/* user */}
                    <div className='flex items-center justify-around border-0 hover:border-b hover:border-gray-500 hover:cursor-pointer pb-0.5'>
                        <User />
                        <span className='text-sm hidden md:flex lg:flex '>Sign Up/Sign In</span>
                    </div>

                    {/* cart btn */}
                    <button
                        onClick={onCartClick}
                        className="relative p-2 hover:bg-slate-700 rounded-lg transition-colors"
                    >
                        <ShoppingCart className="w-6 h-6" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </nav>

            {/* filter */}
            <div className='mt-17 px-5 py-1 flex items-center justify-start overflow-x-auto gap-4' style={{ scrollbarWidth: 'none' }}>
                <p className='border-0 rounded-md px-3 py-1 active:bg-[#422fbd9a] shadow-md shadow-[#422fbd50] bg-slate-300 text-black font-semibold cursor-default'>All</p>
                {/* 1. Extract unique categories into an array */}
                {[...new Set(productsData.map(product => product.category))].map((category) => (
                    <p
                        key={category}
                        className='border-0 rounded-md px-3 py-1 active:bg-[#422fbd9a] shadow-md shadow-[#422fbd50] bg-slate-300 text-black font-semibold cursor-default'
                    >
                        {category.length > 5 ? `${category.slice(0, 5)}...` : category}
                    </p>
                ))}

            </div>
        </>
    );
};