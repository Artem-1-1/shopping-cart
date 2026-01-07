import ProductItem from '../components/ProductItem'
import productsData from '../data/products.json'; 

export default function Store() {
  return (
    <div className='store'>
      <div className='products'>
        {productsData.map((product) => (
          <ProductItem 
            product={product} 
            key={product.id} 
          />
        ))}
      </div>
    </div>
  )
}