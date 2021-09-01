import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProductCartAction } from '../../store/actions/cartsActions'
import { fetchProduct } from '../../store/actions/productsActions'
import styles from './ProductItem.module.scss';

export default function ProductItem({product}){
  const dispatch = useDispatch()
  const [carts, setCarts] = useState([])
  const addCart = (product) => {
    setCarts(products => [...products, product])
    dispatch(addProductCartAction(product))
  }
  return(
    <div className={styles.ProductItem}>
      <Link href={`/product/${product.slug}`}>
        <a onClick={() => dispatch(fetchProduct(product.slug))}>
          <div className={styles.ProductItem__item}>
            <div className={styles.ProductItem__imgWrapper}>
              <Image layout='fill' src={product.image} alt={product.name} className={styles.ProductItem__img} />
            </div>
            <div className={styles.ProductItem__description}>
              <h2 className={styles.ProductItem__title}>{product.name}</h2>
              <p className={styles.ProductItem__price}>Цена: {product.price} ₽</p>
            </div>
          </div>
        </a>
      </Link>
      <button onClick={() =>  addCart(product)}>Добавить в корзину</button>
    </div>
  )
}