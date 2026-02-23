import { useEffect, useState } from 'react';
import axios from 'axios';
import { IndianRupee, Plus } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import toast, { Toaster } from 'react-hot-toast';

export default function Products({productsData, loading}) {
    const addToCart = useCartStore(state => state.addToCart);

    const handleAddToCart = (product) => {
        addToCart(product);
        // console.log('Product added to cart:', product.title);
        toast.success(`${product.title} added to cart!`);

    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-100">
                <div className="text-lg text-gray-600">Loading products...</div>
            </div>
        );
    }

    return (
        <div className="w-full mx-auto p-2 mt-0">
            <Toaster position="top-center" />
            <h2 className="text-3xl font-bold text-gray-800 mb-5">Our Products</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {productsData.map((product) => (
                    <div
                        key={product._id}
                        className="bg-white flex flex-col items-center justify-between rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:shadow-[#551e486c] transition-shadow"
                    >
                        <img
                            src={product.thumbnail}
                            loading='lazy'
                            alt={product.title}
                            // className={`w-${product.width} h-${product.height} my-1 rounded-t-md shadow-md shadow-${product.depth} object-cover`}
                            className={`w-${product.width} h-max my-1 rounded-t-md shadow-md object-cover`}
                        />
                        <div className="w-full m-2 px-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {product.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                {product.description}
                            </p>
                        </div>
                        <div className="px-4 py-2 w-full flex justify-between items-center">
                            <span className="text-xl font-semibold text-slate-800 flex items-center justify-center">
                                {/* <IndianRupee size={15}/> */}
                                ${product.price}
                            </span>
                            <button
                                onClick={() => handleAddToCart(product)}
                                className="bg-linear-to-r from-[#db2bb1] to-[#422fbd] text-white rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-2 hover:cursor-pointer"
                            >
                                <div className='w-full flex items-center justify-center rounded-lg bg-[#79787818] px-2 py-2.5 gap-2'>
                                    <Plus size={20} />
                                    Add to Cart
                                </div>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};