import CartHeader from "../CartHeader";
import {Button} from '../../UI/button/button'
import './index.scss'


export default function MainMenu() {

  return(
    <menu className='MainMenu'>
      <ul>
        <li><Button href={'/'} name={'Главная'}></Button></li>
        <li><Button href={'/about'} name={'О компании'}></Button></li>
        <li><Button href={'/contacts'} name={'Контакты'}></Button></li>
        <li><Button href={'/delivery'} name={'Оплата и доставка'}></Button></li>
      </ul>
      <CartHeader />
    </menu>
  )
}