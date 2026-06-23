'use client';

import "./Header.css";
import Link from "next/link";
import { useState } from "react";

interface Props {
  logoSrc?: string;
  buttonText?: string;
  buttonIconSrc?: string;
  navLinks?: {
    label: string;
    href: string;
  }[];
}

export default function Header({
  logoSrc = "/Logo11.png",
  buttonText = "Увійти",
  buttonIconSrc,
  navLinks = [
    { label: "Головна", href: "/" },
    { label: "Меню", href: "/restaurants" },
    { label: "Про нас", href: "/contacts" },
  ],
}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="logo">
          <img src={logoSrc} alt="logo" />
        </Link>

        <nav className="nav">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href}>
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

        <button
          className={`burger${menuOpen ? " burger--open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Відкрити меню"
          aria-expanded={menuOpen}
        >
          <span className="burger__line" />
          <span className="burger__line" />
          <span className="burger__line" />
        </button>
      </div>

      {/* Mobile menu */}
      <nav className={`mobile-nav${menuOpen ? " mobile-nav--open" : ""}`}>
        {navLinks.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link href="/login" className="mobile-nav__btn" onClick={() => setMenuOpen(false)}>
          {buttonIconSrc && (
            <img src={buttonIconSrc} alt="icon" className="btn-icon" />
          )}
          {buttonText}
        </Link>
      </nav>
    </header>
  );
}