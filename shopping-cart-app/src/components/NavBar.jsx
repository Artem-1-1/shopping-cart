import { Outlet, NavLink, ScrollRestoration } from "react-router-dom"
import Home from '../assets/home.svg'
import Shop from '../assets/shop.svg'
import Cart from '../assets/cart.svg'

export default function NavBar() {
  return (
    <div className="navigation">
      <ScrollRestoration/>
      <header>
        <nav>
          <NavLink to="/">
            <img src={Home} alt="Home icon" />
            Home</NavLink>
          <NavLink to="/shop">
            <img src={Shop} alt="Shop icon" />
            Store
          </NavLink>
          <NavLink to="/cart">
            <img src={Cart} alt="Cart icon" />
            Your Cart
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  )
}