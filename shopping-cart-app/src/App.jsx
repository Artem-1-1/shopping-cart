import './App.css'
import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import NotFound from './pages/NotFound'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Route>

  )
) 

function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
