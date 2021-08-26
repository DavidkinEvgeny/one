// import { useState } from "react"

// export function useCart() {
//   const [cartProducts, setCartProducts] = useState([])
//   console.log(cartProducts);

//   const getCartProducts = (e) => {
//     const value = e.target.value
//     const valueProduct = products.find(product => product.slug === value)
//     if (cartProducts.find(product => product.slug === value)) {
//       setCartProducts([...cartProducts])
//     } else {
//       setCartProducts([...cartProducts, valueProduct])
//     }
//   }
//   return cartProducts
// }
  


// export async function getServerSideProps(context) {
//     const responseProducts = await fetch('http://127.0.0.1:8000/api/product')
//     // const responseCategories = await fetch('http://davidkinevgeny.ru/api/category')
//     // const responseProducts = await fetch('http://davidkinevgeny.ru/api/product')
//     const products = await responseProducts.json()
//     return {
//       props: {products},
//     }
//   }