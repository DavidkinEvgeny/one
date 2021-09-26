import { useSelector } from 'react-redux'
import { Button } from '../../UI/button/button';
import './index.scss';

export default function CartHeader() {
  // const dispatch = useDispatch()
  const {cartProducts} = useSelector(state => state.carts)
  return(
    <div className='CartHeader'>
      <Button href={'/cart'} name={`В корзине ${cartProducts.length} товаров`}></Button>
    </div>
  )
}