import './Header.css';
import Link from "next/link";

interface Props {
<<<<<<< HEAD
    logoSrc: string;
    buttonText: string;
    navLinks: {
        label: string;
        href: string;
    }[];
}

export default function Header({ logoSrc, buttonText, navLinks }: Props) {
    return (
        <header className="header">
            <div className="container">
                <Link href="/" className="logo">
                    <img src={logoSrc} alt="logo" />
                </Link>
=======
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
>>>>>>> 32ab514afddeb90e1057b5219d04e8910ce0e2df

                <nav className="nav">
                    {navLinks.map((item, index) => (
                        <Link key={index} href={item.href}>
                            {item.label}
                        </Link>
                    ))}
                </nav>

<<<<<<< HEAD
                <button className="order-btn">
                    {buttonText}
                </button>
            </div>
        </header>
    );
=======
        <Link href="/login" className="order-btn">
          {buttonIconSrc && (
            <img src={buttonIconSrc} alt="icon" className="btn-icon" />
          )}
          {buttonText}
        </Link>
      </div>
    </header>
  );
>>>>>>> 32ab514afddeb90e1057b5219d04e8910ce0e2df
}