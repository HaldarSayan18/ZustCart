import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';
import './App.css';
import Footer from './components/Footer';
import axios from 'axios';

export const backendAPI = 'https://zustcart-server.onrender.com';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [productsData, setProductsData] = useState([]);

  async function fetchProducts() {
    try {
      const products = await axios.get(`${backendAPI}/api/products`);
      setProductsData(products.data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onCartClick={() => setIsCartOpen(true)} productsData={productsData} />
      <Products productsData={productsData} loading={loading} />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} productsData={productsData} />
      <Footer />
    </div>
  );
}