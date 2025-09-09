// src/lib/api.ts

const BASE = process.env.NEXT_PUBLIC_API_URL ?? ""; // e.g., "http://localhost:4000"
const PREFIX = process.env.NEXT_PUBLIC_API_PREFIX ?? ""; // e.g., "/api" or ""

export type Opts = {
  method?: string;
  body?: any;
  token?: string | null;
  headers?: Record<string, string>;
  signal?: AbortSignal;
  timeoutMs?: number;
  // internal
  _retry?: boolean;
};

export class ApiError extends Error {
  status: number;
  url: string;
  method: string;
  bodyText?: string;
  constructor(params: {
    message: string;
    status: number;
    url: string;
    method: string;
    bodyText?: string;
  }) {
    super(params.message);
    this.name = "ApiError";
    this.status = params.status;
    this.url = params.url;
    this.method = params.method;
    this.bodyText = params.bodyText;
  }
}

function buildUrl(path: string): string {
  // path comes in like "/auth/signup"
  return `${BASE}${PREFIX}${path}`;
}

async function parseJsonSafe<T = any>(res: Response): Promise<T | {}> {
  try {
    // 204 No Content has no body
    if (res.status === 204) return {};
    return (await res.json()) as T;
  } catch {
    return {};
  }
}

async function textSafe(res: Response): Promise<string> {
  try {
    return await res.text();
  } catch {
    return "";
  }
}

async function refresh(): Promise<string | null> {
  // sends httpOnly refresh cookie automatically
  const res = await fetch(`${BASE}${PREFIX}/auth/refresh`, {
    method: "POST",
    credentials: "include",
  });
  if (!res.ok) return null;
  const { accessToken } = (await res.json().catch(() => ({}))) as {
    accessToken?: string;
  };
  return accessToken ?? null;
}

/**
 * Throwing version (original semantics).
 * On 401, tries a single refresh and replays with the new token.
 * Throws ApiError on non-2xx.
 */
export async function apiFetch<T = any>(
  path: string,
  opts: Opts = {}
): Promise<{ data: T; res: Response; token?: string | null }> {
  const {
    method = "GET",
    body,
    token,
    headers = {},
    signal,
    timeoutMs,
    _retry,
  } = opts;

  const controller = !signal && timeoutMs ? new AbortController() : undefined;
  const timeoutId =
    controller && timeoutMs
      ? setTimeout(() => controller.abort(), timeoutMs)
      : undefined;

  const url = buildUrl(path);

  let res: Response;
  try {
    res = await fetch(url, {
      method,
      credentials: "include", // send/receive cookies
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...headers,
      },
      ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
      signal: signal ?? controller?.signal,
    });
  } catch (e: any) {
    if (timeoutId) clearTimeout(timeoutId);
    throw new ApiError({
      message: `Network error for ${method} ${path}: ${e?.message ?? e}`,
      status: 0,
      url,
      method,
    });
  } finally {
    if (timeoutId) clearTimeout(timeoutId);
  }

  // If 401, try one refresh then replay with new token
  if (res.status === 401 && !_retry) {
    const newToken = await refresh();
    if (newToken) {
      return apiFetch<T>(path, { ...opts, token: newToken, _retry: true });
    }
  }

  if (!res.ok) {
    const bodyText = await textSafe(res);
    throw new ApiError({
      message: `API ${method} ${path} ${res.status}: ${
        bodyText || res.statusText
      }`,
      status: res.status,
      url,
      method,
      bodyText,
    });
  }

  const data = (await parseJsonSafe<T>(res)) as T;
  return { data, res, token };
}

/**
 * Non-throwing wrapper: always returns { data?, error?, res? }.
 * Good for UI layers where you don't want try/catch everywhere.
 */
export async function safeApiFetch<T = any>(
  path: string,
  opts: Opts = {}
): Promise<{ data?: T; error?: string; res?: Response; status?: number }> {
  try {
    const { data, res } = await apiFetch<T>(path, opts);
    return { data, res, status: res.status };
  } catch (e: any) {
    if (e instanceof ApiError) {
      return {
        error: e.message,
        status: e.status,
      };
    }
    return {
      error: e?.message ?? "Unknown error",
    };
  }
}

/** Convenience clients (throwing & safe) */
export const api = {
  register: (email: string, password: string, name?: string) =>
    apiFetch("/auth/signup", {
      method: "POST",
      body: { email, password, name },
    }),
  login: (email: string, password: string) =>
    apiFetch<{ accessToken: string; user: any }>("/auth/login", {
      method: "POST",
      body: { email, password },
    }),
  me: (token: string) => apiFetch("/auth/me", { token }),
  logout: () => apiFetch("/auth/logout", { method: "POST" }),
};

export const apiSafe = {
  register: (email: string, password: string, name?: string) =>
    safeApiFetch("/auth/signup", {
      method: "POST",
      body: { email, password, name },
    }),
  login: (email: string, password: string) =>
    safeApiFetch<{ accessToken: string; user: any }>("/auth/login", {
      method: "POST",
      body: { email, password },
    }),
  me: (token: string) => safeApiFetch("/auth/me", { token }),
  logout: () => safeApiFetch("/auth/logout", { method: "POST" }),
};
