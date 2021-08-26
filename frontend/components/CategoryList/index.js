import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { fetchProductCategories } from '../../store/actions/categoriesActions'


export default function CategoryList({categories}){
  const dispatch = useDispatch()

  return(
    <div>
      <h2>Список категорий</h2>
      <ul>
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

