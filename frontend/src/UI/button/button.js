import './index.scss';
import {Link} from "react-router-dom";

export const Button = (props) => {
    return (
        <Link to={props.href} className='button'>{props.name}</Link>
    )
}