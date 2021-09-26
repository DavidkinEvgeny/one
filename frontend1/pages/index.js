import { useEffect } from "react"
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import MainWrapper from "../components/MainWrapper";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions/productsActions";
import { fetchCategories } from "../store/actions/categoriesActions";
import ContentWrapper from "../components/ContentWrapper";


export default function Home() {
  const dispatch = useDispatch()
  const {categories} = useSelector(state => state.categories)
  const {products} = useSelector(state => state.products)
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
