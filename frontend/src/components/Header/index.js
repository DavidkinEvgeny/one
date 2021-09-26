import {Link} from "react-router-dom";
// import CartHeader from "../CartHeader";
import MainMenu from '../MainMenu'
import './index.scss'


export default function Header() {

  return(
    <div className='Header'>
      <div className='Header__logo'>
        <Link to='/'>На главную</Link>
      </div>
      <div className='Header__phone'>
        <a href='tel:+79275554997'>+7 (927) 555-49-97</a>
      </div>
      <MainMenu />
    </div>
  )
}