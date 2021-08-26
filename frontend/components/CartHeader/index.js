import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link';

export default function CartHeader() {
  const dispatch = useDispatch()
  const {cartProducts} = useSelector(state => state.carts)
  return(
    <div>
      <Link href={'/cart'}><a><h3>В корзине {cartProducts.length} товаров</h3></a></Link>
    </div>
  )
}