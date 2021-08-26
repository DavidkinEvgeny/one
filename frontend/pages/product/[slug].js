import { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import CategoryList from "../../components/CategoryList";
import MainWrapper from "../../components/MainWrapper";
// import { fetchProduct } from "../../store/actions/productActions";
import {useRouter} from 'next/router'
import { fetchCategories, fetchProductCategories } from "../../store/actions/categoriesActions";
import { fetchProduct } from "../../store/actions/productsActions";
// import { fetchCategories } from "../../store/actions/categoriesActions";
import Link from 'next/link';


export default function ProductDetail(){
  // const router = useRouter()
  // const dispatch = useDispatch()
  // const {product} = useSelector(state => state.product)
  // const {categories} = useSelector(state => state.categories)
  // useEffect(() => {
  //   dispatch(fetchProduct(router.query.slug))
  //   dispatch(fetchCategories())
  // }, [])

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
// console.log(cartProducts);
// ==========================
const dispatch = useDispatch()
const {categories} = useSelector(state => state.categories)
const {product} = useSelector(state => state.products)
useEffect(() => {
  dispatch(fetchProduct())
  dispatch(fetchCategories())
  }, [])
  return(
    <MainWrapper>
        <CategoryList categories={categories}/>
        <hr />
      {/* <CategoryList categories={categories} /> */}
      <hr />
      <div >
        <h2>{product.name}</h2>
        <h4>Цена: {product.price}</h4>
        <p>{product.description}</p>
        {(product.image) ? <img src={`http://localhost:8000${product.image}`} alt={product.name} /> : null}
        {/* <button value={product.slug} onClick={getCartProducts}>Добавить в корзину</button> */}
      </div>
    </MainWrapper>
  )
}
