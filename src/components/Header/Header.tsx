import './Header.css';
import Link from "next/link";

interface Props {
  logoSrc: string;
  buttonText: string;
  buttonIconSrc?: string; // Опциональная иконка для кнопки из ветки 32ab514
  navLinks: {
    label: string;
    href: string;
  }[];
}

export default function Header({ logoSrc, buttonText, buttonIconSrc, navLinks }: Props) {
  return (
    <header className="header">
      <div className="container">
        {/* Логотип */}
        <Link href="/" className="logo">
          <img src={logoSrc} alt="logo" />
        </Link>

        {/* Навигация */}
        <nav className="nav">
          {navLinks.map((item, index) => (
            <Link key={index} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Кнопка действия (авторизация/регистрация в виде ссылки Link) */}
        <Link href="/login" className="order-btn">
          {buttonIconSrc && (
            <img src={buttonIconSrc} alt="icon" className="btn-icon" />
          )}
          {buttonText}
        </Link>
      </div>
    </header>
  );
}