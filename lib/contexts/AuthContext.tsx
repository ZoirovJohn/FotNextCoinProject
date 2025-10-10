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

interface ApiLoginResponse {
  accessToken: string;
  user: User;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [token, setToken] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const existingToken = localStorage.getItem("accessToken");
        const existingUser = localStorage.getItem("user");

        if (existingUser) setUser(JSON.parse(existingUser));

        if (!existingToken) {
          setUser(null);
          setToken(null);
          setReady(true);
          return;
        }

        // refresh token
        const r = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL ?? ""}${
            process.env.NEXT_PUBLIC_API_PREFIX ?? ""
          }/auth/refresh`,
          { method: "POST", credentials: "include" }
        );

        if (!r.ok) {
          setUser(null);
          setToken(null);
          localStorage.removeItem("accessToken");
          localStorage.removeItem("user");
          setReady(true);
          return;
        }

        const { accessToken }: { accessToken?: string } = await r.json();
        if (accessToken) {
          setToken(accessToken);
          localStorage.setItem("accessToken", accessToken);

          const me = await api.me(accessToken);
          const fetchedUser =
            (me.data as unknown as ApiLoginResponse).user ?? null;
          setUser(fetchedUser);
          localStorage.setItem("user", JSON.stringify(fetchedUser ?? {}));
        }
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

    const res = await api.register(email, password, name);
    const data = res.data as ApiLoginResponse;

    setToken(data.accessToken);
    setUser(data.user);

    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("user", JSON.stringify(data.user ?? {}));
  };

  const login = async (email: string, password: string) => {
    if (!email || !password) throw new Error("Email and password required");

    const res = await api.login(email, password);
    const data = res.data as ApiLoginResponse;

    setToken(data.accessToken);
    setUser(data.user);

    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("user", JSON.stringify(data.user ?? {}));
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
