import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { fetchProductCategories } from '../../store/actions/categoriesActions'
import styles from './CategoryList.module.scss';

export default function CategoryList({categories}){
  const dispatch = useDispatch()

  return(
    <div>
      <ul className={styles.CategoryList}>
        {categories.map(category => {
          return <li key={category.id} onClick={() => dispatch(fetchProductCategories(category.slug))}>
              <Link href={`/category/${category.slug}`} >
                <a >{category.name}</a>
              </Link>
            </li>
        })}
      </ul>
    </div>
  )
} 

