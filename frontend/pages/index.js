import { useState, useEffect } from "react"
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
// import CartHeader from "../components/CartHeader";
import MainWrapper from "../components/MainWrapper";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, fetchProducts } from "../store/actions/productsActions";
import { fetchCategories, fetchProductCategories } from "../store/actions/categoriesActions";
import Link from 'next/link';


export default function Home() {
  const dispatch = useDispatch()
  const {categories} = useSelector(state => state.categories)
  const {products} = useSelector(state => state.products)
  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchCategories())
  }, [])
  // Вынести в отдельную функцию
// ==========================
  // const [cartProducts, setCartProducts] = useState([])

  // const getCartProducts = (e) => {
  //   const value = e.target.value
  //   const valueProduct = products.find(product => product.slug === value)
  //   if (cartProducts.find(product => product.slug === value)) {
  //     setCartProducts([...cartProducts])
  //   } else {
  //     setCartProducts([...cartProducts, valueProduct])
  //   }
  // }

  return (
    <MainWrapper>
      <CategoryList categories={categories}/>
      <hr />
      <ProductList products={products} />
    </MainWrapper>
  )
}
