
import ProductItem from "../ProductItem";
import './index.scss';


export default function ProductList({products}){
  // console.log(products);
  return(
    <div className='ProductList'>
      <ul className='ProductList__wrapper'>
        {products.map(product => {
          return (
            <li key={product.id} className='ProductList__item'>
              <ProductItem product={product}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}