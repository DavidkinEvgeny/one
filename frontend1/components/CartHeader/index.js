import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link';
import { Button } from '../../UI/button/button';
import styles from './CartHeader.module.scss';

export default function CartHeader() {
  const dispatch = useDispatch()
  const {cartProducts} = useSelector(state => state.carts)
  return(
    <div className={styles.CartHeader}>
      <Button href={'/cart'} name={`В корзине ${cartProducts.length} товаров`}></Button>
    </div>
  )
}