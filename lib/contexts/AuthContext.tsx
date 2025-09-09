"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "@/lib/api";

type User = { id: string; email: string; name?: string } | null;

type AuthCtx = {
  user: User;
  token: string | null;
  ready: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string, name?: string) => Promise<void>;
};

const Ctx = createContext<AuthCtx>({
  user: null,
  token: null,
  ready: false,
  login: async () => {},
  logout: async () => {},
  register: async () => {},
});

export const useAuth = () => useContext(Ctx);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [token, setToken] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  // === Bootstrap on page load: explicit refresh -> me ===
  useEffect(() => {
  (async () => {
    try {
      const existingToken = localStorage.getItem("accessToken");
      const existingUser = localStorage.getItem("user");

      if (existingUser) {
        setUser(JSON.parse(existingUser));
      }

      if (!existingToken) {
        setUser(null);
        setToken(null);
        setReady(true);
        return;
      }

      // try refresh token
      const r = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_API_PREFIX ?? ""}/auth/refresh`,
        { method: "POST", credentials: "include" }
      );

      if (!r.ok) {
        setUser(null);
        setToken(null);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        return;
      }

      const { accessToken } = await r.json();
      setToken(accessToken);
      localStorage.setItem("accessToken", accessToken);

      // refresh user data
      const me = await api.me(accessToken);
      setUser((me.data as any).user ?? null);
      localStorage.setItem("user", JSON.stringify((me.data as any).user ?? {}));
    } catch {
      setUser(null);
      setToken(null);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
    } finally {
      setReady(true);
    }
  })();
}, []);


  const register = async (email: string, password: string, name?: string) => {
    if (!email || !password) throw new Error("Email and password required");

    const { data } = await api.register(email, password, name);
    console.log(`register data:`, data);
    
    const accessToken = (data as any).accessToken as string | undefined;

    setToken(accessToken ?? null);
    setUser((data as any).user ?? null);

    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify((data as any).user ?? {}));
    }
  };

  const login = async (email: string, password: string) => {
    if (!email || !password) throw new Error("Email and password required");

    const { data } = await api.login(email, password);
    const accessToken = (data as any).accessToken as string | undefined;
    console.log(`login accessToken:`, accessToken);

    setToken(accessToken ?? null);
    setUser((data as any).user ?? null);

    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify((data as any).user ?? {}));
    }
  };

  const logout = async () => {
    await api.logout();
    setUser(null);
    setToken(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  };

  if (!ready) return null;

  return (
    <Ctx.Provider value={{ user, token, ready, login, logout, register }}>
      {children}
    </Ctx.Provider>
  );
}
