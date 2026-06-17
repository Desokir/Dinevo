"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import "./Login.css";

export default function Page() {
  const router = useRouter();

  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    router.push("/restaurants");
  };

  return (
    <div className="auth">
      <div className="auth-card">

        <div className="auth-left">

          <Link href="/" className="auth-logo">
            <img src="/Logo11.png" alt="logo" />
          </Link>

          <h1>Увійти</h1>

          <input
            type="email"
            placeholder="Пошта"
            className="auth-input"
          />

          <input
            type="password"
            placeholder="Пароль"
            className="auth-input"
          />

          <button
            className="auth-btn"
            onClick={handleLogin}
          >
            Увійти
          </button>

          <p className="auth-switch">
            Немає акаунта?
            <Link href="/register">
              Зареєструватися
            </Link>
          </p>

        </div>

        <div className="auth-right">
          <img src="/Group 209.png" alt="" />
        </div>

      </div>
    </div>
  );
}