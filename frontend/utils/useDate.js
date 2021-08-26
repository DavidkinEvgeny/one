function getDate({categories, products, category, product}) {
  
  return [categories, products, category, product]
}
export function useDate() {
  return getDate()
}


// export async function getServerSideProps(context) {


//   return {
//     props: {},
//   }
// }

export async function getServerSideProps({params}) {
  const responseCategories = await fetch('http://127.0.0.1:8000/api/category')
  const responseProducts = await fetch('http://127.0.0.1:8000/api/product')
  const responseCategory = await fetch(`http://127.0.0.1:8000/api/category/${params.slug}`)
  const responseProduct = await fetch(`http://127.0.0.1:8000/api/product/${params.slug}`)
  const categories = await responseCategories.json()
  const products = await responseProducts.json()
  const category = await responseCategories.json()
  const product = await responseProduct.json()
  return {
    props: {categories, products, category, product},
  }
}

