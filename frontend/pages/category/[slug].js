import CategoryList from "../../components/CategoryList";
import ProductList from "../../components/ProductList";


export default function CategoryDetail({category, categories}){

  return(
    <div>
      <CategoryList categories={categories} />
      <hr />
      <h2>{category.name}</h2>
      <ProductList products={category.products} />
    </div>
  )
}


export async function getServerSideProps({params}) {
  const responseCategory = await fetch(`http://127.0.0.1:8000/api/category/${params.slug}`)
  const responseCategories = await fetch('http://127.0.0.1:8000/api/category/')
  const category = await responseCategory.json()
  const categories = await responseCategories.json()
  return {
    props: {category, categories},
  }
}