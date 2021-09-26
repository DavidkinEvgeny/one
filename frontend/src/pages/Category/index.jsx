import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryList from "../../components/CategoryList";
import ContentWrapper from "../../components/ContentWrapper";
import MainWrapper from "../../components/MainWrapper";
import ProductList from "../../components/ProductList";
import { fetchCategories } from "../../store/actions/categoriesActions";
import { fetchProductCategories } from "../../store/actions/categoriesActions";



export default function CategoryDetail() {
  const dispatch = useDispatch()
  const {categories} = useSelector(state => state.categories)
  const {products} = useSelector(state => state.categories.products)
  console.log('cat', categories); 
  console.log('prod',products); 
  useEffect(() => {
    dispatch(fetchProductCategories())
    dispatch(fetchCategories())
    }, [])
  return(
    <MainWrapper>
      <ContentWrapper>
        <CategoryList categories={categories}/>
        <ProductList products={products} />
      </ContentWrapper>
    </MainWrapper>
  )
}
