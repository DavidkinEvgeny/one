import Header from "../Header";
import styles from './MainWrapper.module.scss'


export default function MainWrapper({children}) {

  return(
    <div className={styles.MainWrapper}>
      <Header />
      {children}
    </div>
  )
}