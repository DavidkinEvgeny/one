import { useEffect } from "react";
import Image from 'next/image'
import { useDispatch, useSelector } from "react-redux";
import CategoryList from "../../components/CategoryList";
import MainWrapper from "../../components/MainWrapper";
import { fetchCategories, fetchProductCategories } from "../../store/actions/categoriesActions";
import { fetchProduct } from "../../store/actions/productsActions";
import ContentWrapper from "../../components/ContentWrapper";


export default function ProductDetail(){

const dispatch = useDispatch()
const {categories} = useSelector(state => state.categories)
const {product} = useSelector(state => state.products)
useEffect(() => {
  dispatch(fetchProduct())
  dispatch(fetchCategories())
  }, [])
  return(
    <MainWrapper>
      <ContentWrapper>
        <CategoryList categories={categories}/>
        <div >
          <h2>{product.name}</h2>
          <h4>Цена: {product.price}</h4>
          <p>{product.description}</p>
          {(product.image) ? <img src={`http://localhost:8000${product.image}`} alt={product.name} /> : null}
        </div>
      </ContentWrapper>
    </MainWrapper>
  )
}
