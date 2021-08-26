import { useState, useEffect } from "react"
// import ProductList from "../components/ProductList";
// import CartHeader from "../components/CartHeader";
import MainWrapper from "../../components/MainWrapper";
import CategoryList from "../../components/CategoryList";
import { useDispatch, useSelector } from "react-redux";
// import { fetchProduct, fetchProducts } from "../store/actions/productsActions";
// import { fetchCategories, fetchProductCategories } from "../store/actions/categoriesActions";
import Link from 'next/link';
import { removeAllProductCartAction, removeProductCartAction } from "../../store/actions/cartsActions";


export default function Home() {
  const dispatch = useDispatch()
  const {categories} = useSelector(state => state.categories)
  const {cartProducts} = useSelector(state => state.carts)

  return (
    <MainWrapper>
      <CategoryList categories={categories}/>
      <hr />
      {}
      {cartProducts 
      ? cartProducts.map(product => {
        return (
          <div>
            <p>{product.name}</p>
            <button onClick={() => dispatch(removeProductCartAction(product.slug))}>Удалить</button>
          </div>
        )
      })
      : <p>Корзина пуста</p>}
      <button onClick={() => dispatch(removeAllProductCartAction())}>Очистить корзину</button>
    </MainWrapper>
  )
}
