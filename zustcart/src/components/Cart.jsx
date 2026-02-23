import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import emptyCart from '../assets/emptyCart.gif';

export default function Cart({ isOpen, onClose }) {
    const cart = useCartStore(state => state.cart);
    const removeFromCart = useCartStore(state => state.removeFromCart);
    const updateQuantity = useCartStore(state => state.updateQuantity);
    const clearCart = useCartStore(state => state.clearCart);

    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    if (!isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 bg-[#02020254] bg-opacity-50 z-40 transition-all duration-800 ease-out"
                onClick={onClose}
            />

            <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-red-400 rounded-lg transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4">
                    {cart.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-gray-500">
                            <img src={emptyCart} alt="Empty Cart" className="w-50 mt-4 motion-safe:animate-[bounce_3s_ease-in-out_infinite]" loading='lazy' />
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex gap-4 bg-gray-50 p-4 rounded-lg"
                                >
                                    <img
                                        src={item.thumbnail}
                                        alt={item.name}
                                        className="w-20 h-20 object-cover rounded"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800">{item.product_name}</h3>
                                        <p className="text-slate-800 font-bold">${item.price}</p>

                                        <div className="flex items-center gap-2 mt-2">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="p-1 bg-gray-200 hover:bg-gray-300 rounded"
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <span className="w-8 text-center font-semibold">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="p-1 bg-gray-200 hover:bg-gray-300 rounded"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="ml-auto p-1 text-red-500 hover:bg-red-50 rounded"
                                            >
                                                <Trash2 className="w-4 h-4" size={40} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="border-t p-4 space-y-4">
                        <div className="flex justify-between items-center text-xl font-bold">
                            <span>Total:</span>
                            <span className="text-slate-800">${totalPrice.toFixed(2)}</span>
                        </div>

                        <button
                            onClick={clearCart}
                            className="w-full bg-red-300 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                        >
                            Clear Cart
                        </button>

                        <button className="w-full bg-linear-to-r from-[#db2bb2d5] to-[#422fbdc2] text-white py-3 rounded-lg hover:bg-slate-700 transition-colors font-semibold">
                            Checkout
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};