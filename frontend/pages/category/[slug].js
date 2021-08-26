import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryList from "../../components/CategoryList";
import MainWrapper from "../../components/MainWrapper";
import ProductList from "../../components/ProductList";
import { fetchCategories, fetchProductCategories } from "../../store/actions/categoriesActions";
import { fetchProduct, fetchProducts } from "../../store/actions/productsActions";



export default function CategoryDetail() {
  const dispatch = useDispatch()
  const {categories} = useSelector(state => state.categories)
  const {products} = useSelector(state => state.categories.products)
  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchCategories())
    }, [])
  return(
    <MainWrapper>
      <CategoryList categories={categories}/>
      <hr />
      <ProductList products={products} />
    </MainWrapper>
  )
}
