import Home from '../assets/home.svg'
import Shop from '../assets/shop.svg'
import Cart from '../assets/cart.svg'

export default function NavBar() {
  return (
    <div className="navigation">
      <header>
        <nav>
          <a href="#">
            <img src={Home} alt="Home icon" />
            Home</a>
          <a href="#">
            <img src={Shop} alt="Shop icon" />
            Shop</a>
          <a href="#">
            <img src={Cart} alt="Cart icon" />
            Shopping Char</a>
        </nav>
      </header>
    </div>
  )
}