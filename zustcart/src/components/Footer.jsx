import React from 'react'
import logo from '../assets/zustcart_logo.png';
import { Facebook, Instagram, MessagesSquare, Phone, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center bg-slate-950 text-slate-400'>
            <div className='w-full h-max px-5 py-5 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 place-items-start gap-2 mt-5'>
                {/* section-1 */}
                <div className='w-full flex flex-col items-center lg:items-start justify-center'>
                    <img src={logo} alt='logo' className='h-max w-60' />
                    <div className='flex flex-col w-full items-start justify-start gap-2'>
                        <h1 className='font-semibold text-gray-300 text-lg'>Contact Us</h1>
                        <div className='flex items-start justify-start w-full gap-5'>
                            <div className='flex border-0 items-start justify-center'>
                                <MessagesSquare className='border-t border-b m-2 p-2 rounded-md text-green-700 hover:bg-gray-800 hover:border-gray-800' size={30} />
                                <div className='border-0 flex flex-col items-start justify-start px-2 gap-2'>
                                    <p className='font-bold'>WhatsApp</p>
                                    <p>+91 987*****10</p>
                                </div>
                            </div>
                            <div className='flex border-0 items-start justify-center'>
                                <Phone className='border-t border-b m-2 p-2 rounded-md text-red-400 hover:bg-gray-800 hover:border-gray-800' size={30} />
                                <div className='border-0 flex flex-col items-start justify-start px-2 gap-2'>
                                    <p className='font-bold'>Call Us @</p>
                                    <p>+91 987*****10</p>
                                </div>
                            </div>
                        </div>
                        <h1 className='font-semibold text-gray-300 text-lg'>Find Us On</h1>
                        <div className='w-full flex items-center justify-center md:justify-start lg:justify-start gap-4'>
                            <Facebook className='border-t border-b m-2 p-2 rounded-md text-blue-700 hover:bg-gray-800 hover:border-gray-800' size={40} />
                            <Instagram className='border-t border-b m-2 p-2 rounded-md text-[#892197] hover:bg-gray-800 hover:border-gray-800' size={40} />
                            <Youtube className='border-t border-b m-2 p-2 rounded-md text-red-700 hover:bg-gray-800 hover:border-gray-800' size={40} />
                        </div>
                    </div>
                </div>

                {/* section-2 */}
                <div className='w-full flex items-start justify-between gap-5'>
                    <div>
                        <h1 className='text-lg lg:text-2xl text-gray-300 font-semibold border-b px-3'>Our Popular Categories</h1>
                        <ul className='text-body flex flex-col items-justify justify-center gap-3'>
                            <li className='border-0 mt-2 py-1 px-2 hover:border-b cursor-default'>Vegetables</li>
                            <li className='border-0 py-1 px-2 hover:border-b cursor-default'>Terms & Conditions</li>
                            <li className='border-0 py-1 px-2 hover:border-b cursor-default'>FAQ</li>
                            <li className='border-0 py-1 px-2 hover:border-b cursor-default'>Privacy Policy</li>
                            <li className='border-0 py-1 px-2 hover:border-b cursor-default'>Cancellation & Return Policy</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-lg lg:text-2xl text-gray-300 font-semibold border-b px-3'>Customer Services</h1>
                        <ul className='text-body flex flex-col items-justify justify-center gap-3'>
                            <li className='border-0 mt-2 py-1 px-2 hover:border-b cursor-default'>About Us</li>
                            <li className='border-0 py-1 px-2 hover:border-b cursor-default'>Terms & Conditions</li>
                            <li className='border-0 py-1 px-2 hover:border-b cursor-default'>FAQ</li>
                            <li className='border-0 py-1 px-2 hover:border-b cursor-default'>Privacy Policy</li>
                            <li className='border-0 py-1 px-2 hover:border-b cursor-default'>Cancellation & Return Policy</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* copyright */}
            <div className='w-max h-10 flex items-center justify-center border bg-linear-to-r from-[#db2bb1] to-[#422fbd] bg-clip-text text-transparent'>
                <p>© 2025 <b>ZustCart</b>. All rights reserved by <b><i>Sayan Haldar</i></b></p>
            </div>
        </div>
    )
}

export default Footer