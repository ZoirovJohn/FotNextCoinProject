"use client";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/contexts/AuthContext";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import translations from "@/public/locals/translations";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { register } = useAuth();
  const [pending, setPending] = useState(false);
  const { lang } = useLanguage(); // current language
  const t = translations[lang].auth;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setPending(true);

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    try {
      await register(email, password, name);
      window.location.href = "/";
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(t.signUp + " failed");
      }
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="input-wrapper">
        <label htmlFor="authName">{t.name}</label>
        <div className="input-single">
          <input
            id="authName"
            name="name"
            type="text"
            required
            autoComplete="name"
          />
          <i className="fa-solid fa-user" aria-hidden="true" />
        </div>
      </div>

      <div className="input-wrapper mt-30">
        <label htmlFor="authEmail">{t.yourEmail}</label>
        <div className="input-single">
          <input
            id="authEmail"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
          <i className="fa-solid fa-envelope" aria-hidden="true" />
        </div>
      </div>

      <div className="input-wrapper mt-30">
        <label htmlFor="authPassword">{t.yourPassword}</label>
        <div className="input-single">
          <input
            id="authPassword"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            minLength={8}
            autoComplete="new-password"
          />
          <button
            type="button"
            className="show-pass"
            onClick={() => setShowPassword((p) => !p)}
            aria-label={showPassword ? t.hidePassword : t.showPassword}
            style={{ background: "transparent", border: 0, cursor: "pointer" }}
          >
            <i
              className={`ti ${showPassword ? "ti-eye" : "ti-eye-off"}`}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {error && (
        <p className="mt-16" style={{ color: "#e00" }}>
          {error}
        </p>
      )}

      <p className="create-msg mt-20">
        {t.haveAccount} <Link href="/sign-in">{t.signIn}</Link>
      </p>

      <div className="mt-40">
        <button
          type="submit"
          className="btn--primary"
          disabled={pending}
          aria-disabled={pending}
        >
          {pending ? t.creating : t.signUp}{" "}
          <i className="ti ti-arrow-narrow-right" />
        </button>
      </div>
    </form>
  );
}
