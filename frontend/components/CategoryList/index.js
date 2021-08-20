import Link from 'next/link'


export default function CategoryList(props){

  const categories = props.categories
  return(
    <div>
      <h2>Каталог продукции</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id} >
            <Link href={`/category/${category.slug}` }><a categories={categories}>{category.name}</a></Link>
          </li>
        ))}
      </ul>
    </div>
  )
} 

