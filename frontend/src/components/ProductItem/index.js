import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProductCartAction } from '../../store/actions/cartsActions'
import { fetchProduct } from '../../store/actions/productsActions'
import './index.scss'


export default function ProductItem({product}){
  const dispatch = useDispatch()
  const [carts, setCarts] = useState([])
  const addCart = (product) => {
    setCarts(products => [...products, product])
    dispatch(addProductCartAction(product))
  }
  return(
    <div className='ProductItem'>
      <Link to={`/product/${product.slug}`} onClick={() => dispatch(fetchProduct(product.slug))}>
        <div className='ProductItem__item'>
          <div className='ProductItem__imgWrapper'>
            {/* <Image layout='fill' src={product.image} alt={product.name} className={styles.ProductItem__img} /> */}
          </div>
          <div className='ProductItem__description'>
            <h2 className='ProductItem__title'>{product.name}</h2>
            <p className='ProductItem__price'>Цена: {product.price} ₽</p>
          </div>
        </div>
      </Link>
      <button onClick={() =>  addCart(product)}>Добавить в корзину</button>
    </div>
  )
}