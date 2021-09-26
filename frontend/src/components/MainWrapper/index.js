import Header from "../Header";
import './index.scss'


export default function MainWrapper({children}) {

  return(
    <div className='MainWrapper'>
      <Header />
      {children}
    </div>
  )
}