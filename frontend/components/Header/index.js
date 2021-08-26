import Link from "next/link";
import CartHeader from "../CartHeader";

export default function Header() {

    return(
      <div>
        <Link href='/'><a>На главную</a></Link>
        <CartHeader />
      </div>
    )
  }