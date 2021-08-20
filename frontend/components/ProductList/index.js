
import { useState, useEffect } from "react"
import Link from 'next/link'


export default function ProductList({products}){

  return(
    <div>
      <h2>Продукция</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link href={`/product/${product.slug}`}><a>{product.name}</a></Link>
            {product.description}
            <br />
          </li>
        ))}
      </ul>
    </div>
  )
}