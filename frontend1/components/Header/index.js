import Link from "next/link";
import CartHeader from "../CartHeader";
import MainMenu from '../MainMenu'
import styles from './Header.module.scss'


export default function Header() {

  return(
    <div className={styles.Header}>
      <div className={styles.Header__logo}>
        <Link href='/'><a>На главную</a></Link>
      </div>
      <div className={styles.Header__phone}>
        <a href='tel:+79275554997'>+7 (927) 555-49-97</a>
      </div>
      <MainMenu />
    </div>
  )
}