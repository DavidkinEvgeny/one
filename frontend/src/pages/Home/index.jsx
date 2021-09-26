import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryList from './../../components/CategoryList';
import ContentWrapper from './../../components/ContentWrapper';
import MainWrapper from './../../components/MainWrapper';
import ProductList from './../../components/ProductList';
import { fetchCategories } from './../../store/actions/categoriesActions';
import { fetchProducts } from './../../store/actions/productsActions';


export default function Home() {
  const dispatch = useDispatch()
  const {categories} = useSelector(state => state.categories)
  const {products} = useSelector(state => state.products)
  // console.log(products);
  useEffect(() => {
    dispatch(fetchProducts()) 
    dispatch(fetchCategories())
  }, [])
  return (
    <MainWrapper>
      <ContentWrapper>
        <CategoryList categories={categories}/>
        <ProductList products={products} />
      </ContentWrapper>
    </MainWrapper>
  )
}

