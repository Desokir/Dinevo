import './Header.css';
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="logo">
          <img src="LogoOrange.png" alt="logo" />
        </Link>

        <nav className="nav">
          <Link href="/">Головна</Link>
          <Link href="/menu">Меню</Link>
          <Link href="/delivery">Доставка</Link>
          <Link href="/contacts">Контакти</Link>
        </nav>

  

        <button className="order-btn">
          зареєструватися
        </button>
        


      </div>
    </header>
  );
}