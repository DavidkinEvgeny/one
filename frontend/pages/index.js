import { useState, useEffect } from "react"
import Link from 'next/link'
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";


export default function Home({categories, products}) {
  return (
    <div>
      <CategoryList categories={categories} />
      <hr />
      <ProductList products={products} />
    </div>
  )
}


export async function getServerSideProps(context) {
  const responseCategories = await fetch('http://127.0.0.1:8000/api/category')
  const responseProducts = await fetch('http://127.0.0.1:8000/api/product')
  const categories = await responseCategories.json()
  const products = await responseProducts.json()
  return {
    props: {categories, products},
  }
}

