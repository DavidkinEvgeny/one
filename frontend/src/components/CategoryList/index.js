import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchProductCategories } from '../../store/actions/categoriesActions'
import './index.scss';

export default function CategoryList({categories}){
  const dispatch = useDispatch()

  return(
    <div>
      <ul className='CategoryList'>
        {categories.map(category => {
          return <li key={category.id} onClick={() => dispatch(fetchProductCategories(category.slug))}>
              <Link to={`/category/${category.slug}`} >
                {category.name}
              </Link>
            </li>
        })}
      </ul>
    </div>
  )
} 

