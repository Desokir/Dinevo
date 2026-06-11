import './Header.css';
import Link from "next/link";

interface Props {
  logoSrc: string;
  buttonText: string;
  buttonIconSrc?: string;
  navLinks: {
    label: string;
    href: string;
  }[];
}

export default function Header({ logoSrc, buttonText, buttonIconSrc, navLinks }: Props) {
  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="logo">
          <img src={logoSrc} alt="logo" />
        </Link>

        <nav className="nav">
          {navLinks.map((item, index) => (
            <Link key={index} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

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