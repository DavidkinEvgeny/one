import Link from 'next/link'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProductCartAction } from '../../store/actions/cartsActions'
import { fetchProduct } from '../../store/actions/productsActions'


export default function ProductItem({product}){
  const dispatch = useDispatch()
  const [carts, useCarts] = useState([])
  const addCart = (product) => {
    useCarts(products => [...products, product])
    dispatch(addProductCartAction(product))
  }
  return(
    <div >
      <Link href={`/product/${product.slug}`}><a onClick={() => dispatch(fetchProduct(product.slug))}>{product.name}</a></Link>
      <button onClick={() =>  addCart(product)}>Добавить в корзину</button>
    </div>
  )
}