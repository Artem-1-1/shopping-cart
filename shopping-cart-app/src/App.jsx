import './App.css'
import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import NotFound from './pages/NotFound'
import Store from './pages/Store'
import ProductPage from './pages/ProductPage'
import Cart from './pages/Cart'
import { useState } from 'react'


export default function App() {
  const [cart, setCart] = useState([])

  const handleAddToCart = (product, quantity) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  }

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCart((prev) => prev.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  };

  const handleRemove = (id) => setCart((prev) => prev.filter(item => item.id !== id));

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar cartAmount={totalCartItems} />}>
        <Route index element={<Home />} />
        <Route path='store' element={<Store/>} />
        <Route path='store/:id' element={<ProductPage onAddToCart={handleAddToCart}/>} />
        <Route path='cart' element={<Cart 
            cart={cart} 
            subtotal={subtotal}
            onRemove={handleRemove}
            onIncrement={(item) => handleUpdateQuantity(item.id, item.quantity + 1)}
            onDecrement={(item) => handleUpdateQuantity(item.id, item.quantity - 1)}
            onChange={handleUpdateQuantity}
            />}/>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  ) 

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}
