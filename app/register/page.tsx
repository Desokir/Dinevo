"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import "@/app/register/Register.css";

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = () => {
    localStorage.setItem("auth", "true");
    router.push("/restaurants");
  };

  return (
    <div className="auth">
      <div className="auth-card">
        
        <div className="auth-left">
          
          <div className="auth-logo">
            <img src="/Logo11.png" alt="logo" />
          </div>

          <h1>РЕЄСТРАЦІЯ</h1>

          <input className="auth-input" type="text" placeholder="Ім'я" />
          <input className="auth-input" type="email" placeholder="Пошта" />
          <input className="auth-input" type="password" placeholder="Пароль" />

          <button className="auth-btn" onClick={handleRegister}>
            Зареєструватися
          </button>

          <div className="auth-switch">
            Вже є акаунт?
            <Link href="/login">Увійти</Link>
          </div>
        </div>

        <div className="auth-right">
          <img src="/Group 209.png" alt="courier" />
        </div>

      </div>
    </div>
  );
}