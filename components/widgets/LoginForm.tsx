"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/contexts/AuthContext";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import translations from "@/public/locals/translations";

export default function LoginForm() {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const { lang } = useLanguage();
  const t = translations[lang].auth;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("auth-email") ?? "").trim();
    const password = String(formData.get("auth-password") ?? "");

    try {
      await login(email, password);
      window.location.href = "/"; // redirect after login
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(`${t.signIn} failed`);
      }
    } finally {
      setPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper mt-30">
        <label htmlFor="authEmail">{t.yourEmail}</label>
        <div className="input-single">
          <input
            type="email"
            name="auth-email"
            id="authEmail"
            placeholder={t.yourEmail}
            required
          />
          <i className="fa-solid fa-envelope"></i>
        </div>
      </div>

      <div className="input-wrapper mt-30 password-group">
        <label htmlFor="authPassword">{t.yourPassword}</label>
        <div className="input-single">
          <input
            type={showPassword ? "text" : "password"}
            name="auth-password"
            id="authPassword"
            placeholder={t.yourPassword}
            required
          />
          <i
            className={`ti ${showPassword ? "ti-eye" : "ti-eye-off"} show-pass`}
            onClick={() => setShowPassword((p) => !p)}
            style={{ cursor: "pointer" }}
            aria-label={showPassword ? t.hidePassword : t.showPassword}
          />
        </div>
      </div>

      {error && (
        <p className="mt-16" style={{ color: "#e00" }}>
          {error}
        </p>
      )}

      <p className="text-end mt-16 forget-pass">
        <Link href="contact-us">{t.forgetPassword}</Link>
      </p>
      <p className="create-msg mt-20">
        {t.haveAccount} <Link href="sign-up">{t.signUp}</Link>
      </p>

      <div className="mt-40">
        <button
          type="submit"
          className="btn--primary"
          disabled={pending}
          aria-disabled={pending}
        >
          {pending ? t.creating : t.signIn}{" "}
          <i className="ti ti-arrow-narrow-right"></i>
        </button>
      </div>
    </form>
  );
}
