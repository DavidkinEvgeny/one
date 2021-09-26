
import { useState, useEffect } from "react"
import Link from 'next/link'
import ProductItem from "../ProductItem";
import { useDispatch } from "react-redux";
import styles from './ProductList.module.scss';


export default function ProductList({products}){
  const dispatch = useDispatch()
  return(
    <div className={styles.ProductList}>
      <ul className={styles.ProductList__wrapper}>
        {products.map(product => {
          return (
            <li key={product.id} className={styles.ProductList__item}>
              <ProductItem product={product}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}