
import { useState, useEffect } from "react"
import Link from 'next/link'
import ProductItem from "../ProductItem";
import { useDispatch } from "react-redux";


export default function ProductList({products}){
  const dispatch = useDispatch()
 
  return(
    <div>
      <h2>Продукты</h2  >
      <ul>
        {products.map(product => {
          return (
            <li key={product.id}>
              <ProductItem product={product}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}