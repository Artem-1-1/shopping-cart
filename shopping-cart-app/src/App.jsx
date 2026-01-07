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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<Home />} />
      <Route path='store' element={<Store/>} />
      <Route path='store/:id' element={<ProductPage />} />
      <Route path='cart' element={<Cart/>}/>
      <Route path="*" element={<NotFound />} />
    </Route>

  )
) 

export default function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}
