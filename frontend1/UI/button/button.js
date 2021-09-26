import styles from './button.module.scss';
import Link from "next/link";

export const Button = (props) => {
    return (
        <Link href={props.href}><a className={styles.button}>{props.name}</a></Link>
    )
}