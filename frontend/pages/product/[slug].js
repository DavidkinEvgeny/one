import CategoryList from "../../components/CategoryList";


export default function ProductDetail({product, categories}){

  return(
    <div>
      <CategoryList categories={categories} />
      <hr />
      <div>
        <h2>{product.name}</h2>
        <h4>Цена: {product.price}</h4>
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export async function getServerSideProps({params}) {
  const responseProduct = await fetch(`http://127.0.0.1:8000/api/product/${params.slug}`)
  const responseCategories = await fetch('http://127.0.0.1:8000/api/category/')
  const product = await responseProduct.json()
  const categories = await responseCategories.json()
  return {
    props: {product, categories},
  }
}