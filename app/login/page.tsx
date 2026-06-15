"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import "@/app/login/Login.css";

export default function Page() {
  const router = useRouter();

  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    router.push("/restaurants");
  };

  return (
    <div className="auth">

      <div className="authLogoWrap">
        <Link href="/" className="authLogo">
          <img src="/Logo11.png" alt="logo" />
        </Link>
      </div>

      <div className="authCard">

        <h1 className="authTitle">Вхід</h1>

        <input className="authInput" placeholder="Пошта або номер" />
        <input className="authInput" type="password" placeholder="Пароль" />

        <button className="authBtn" onClick={handleLogin}>
          Увійти
        </button>

        <p className="authText">
          Немає акаунта?{" "}
          <Link href="/register" className="authLink">
            Зареєструватися
          </Link>
        </p>

      </div>
    </div>
  );
}