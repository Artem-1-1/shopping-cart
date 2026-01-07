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
import Cart from './pages/Cart'
import ProductPage from './pages/ProductPage'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<Home />} />
      <Route path='store' element={<Store/>}>
        <Route 
          path=":id" 
          element={<ProductPage />}
        />
      </Route>
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
