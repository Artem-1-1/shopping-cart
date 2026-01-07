import { Link } from 'react-router-dom'

export default function ProductItem({ product }) {
  return (
    <Link className='store-item' to={product.path}>
      <div className='product-image-container'>
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className='store-item-info'>
        <p className="store-item-product-name">{product.name}</p>
        <p className="store-item-product-price">{`${product.prefix}${product.price}`}</p>
      </div>
    </Link>
  )
}