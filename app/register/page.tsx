"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import "@/app/login/Login.css";

export default function Page() {
  const router = useRouter();

  const handleRegister = () => {
    localStorage.setItem("auth", "true");
    router.push("/");
  };

  return (
    <div className="auth">

      <Link href="/" className="authLogo">
        <img src="/Logo11.png" alt="logo" />
      </Link>

      <div className="authCard">

        <h1 className="authTitle">Реєстрація</h1>

        <input className="authInput" placeholder="Ім'я" />
        <input className="authInput" placeholder="Пошта або номер" />
        <input className="authInput" type="password" placeholder="Пароль" />

        <button className="authBtn" onClick={handleRegister}>
          Зареєструватися
        </button>

        <p className="authText">
          Вже є акаунт?{" "}
          <Link href="/login" className="authLink">
            Увійти
          </Link>
        </p>

      </div>
    </div>
  );
}