import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryList from "../../components/CategoryList";
import ContentWrapper from "../../components/ContentWrapper";
import MainWrapper from "../../components/MainWrapper";
import ProductList from "../../components/ProductList";
import { fetchCategories, fetchProductCategories } from "../../store/actions/categoriesActions";
import { fetchProducts } from "../../store/actions/productsActions";



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
      <ContentWrapper>
        <CategoryList categories={categories}/>
        <ProductList products={products} />
      </ContentWrapper>
    </MainWrapper>
  )
}
