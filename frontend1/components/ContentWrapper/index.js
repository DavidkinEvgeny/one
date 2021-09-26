import styles from './ContentWrapper.module.scss';

export default function ContentWrapper({children}){

  return(
    <div className={styles.ContentWrapper}>
      {children}
    </div>
  )
} 

