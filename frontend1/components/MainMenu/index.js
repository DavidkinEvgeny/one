import Link from "next/link";
import CartHeader from "../CartHeader";
import {Button} from '../../UI/button/button'
import styles from './MainMenu.module.scss'

export default function MainMenu() {

  return(
    <menu className={styles.MainMenu}>
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