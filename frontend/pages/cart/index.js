import MainWrapper from "../../components/MainWrapper";
import CategoryList from "../../components/CategoryList";
import { useDispatch, useSelector } from "react-redux";
import { removeAllProductCartAction, removeProductCartAction } from "../../store/actions/cartsActions";


export default function Home() {
  const dispatch = useDispatch()
  const {categories} = useSelector(state => state.categories)
  const {cartProducts} = useSelector(state => state.carts)

  return (
    <MainWrapper>
      <CategoryList categories={categories}/>
      {cartProducts 
      ? cartProducts.map(product => {
        return (
          <div key={product.id}>
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
