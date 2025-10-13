// src/lib/api.ts

const BASE = process.env.NEXT_PUBLIC_API_URL ?? ""; // e.g., "http://localhost:4100"
const PREFIX = process.env.NEXT_PUBLIC_API_PREFIX ?? ""; // e.g., "/api" or ""

export type Opts<BodyType = unknown> = {
  method?: string;
  body?: BodyType;
  token?: string | null;
  headers?: Record<string, string>;
  signal?: AbortSignal;
  timeoutMs?: number;
  _retry?: boolean; // internal
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
  return `${BASE}${PREFIX}${path}`;
}

async function parseJsonSafe<T = unknown>(res: Response): Promise<T | object> {
  try {
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

export async function apiFetch<T = unknown, B = unknown>(
  path: string,
  opts: Opts<B> = {}
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
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...headers,
      },
      ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
      signal: signal ?? controller?.signal,
    });
  } catch (e: unknown) {
    if (timeoutId) clearTimeout(timeoutId);
    const msg = e instanceof Error ? e.message : String(e);
    throw new ApiError({
      message: `Network error for ${method} ${path}: ${msg}`,
      status: 0,
      url,
      method,
    });
  } finally {
    if (timeoutId) clearTimeout(timeoutId);
  }

  if (res.status === 401 && !_retry) {
    const newToken = await refresh();
    if (newToken) {
      return apiFetch<T, B>(path, { ...opts, token: newToken, _retry: true });
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

export async function safeApiFetch<T = unknown, B = unknown>(
  path: string,
  opts: Opts<B> = {}
): Promise<{ data?: T; error?: string; res?: Response; status?: number }> {
  try {
    const { data, res } = await apiFetch<T, B>(path, opts);
    return { data, res, status: res.status };
  } catch (e: unknown) {
    if (e instanceof ApiError) {
      return { error: e.message, status: e.status };
    }
    const msg = e instanceof Error ? e.message : "Unknown error";
    return { error: msg };
  }
}

export const api = {
  register: (email: string, password: string, name?: string) =>
    apiFetch("/auth/signup", {
      method: "POST",
      body: { email, password, name },
    }),

  login: (email: string, password: string) =>
    apiFetch<{ accessToken: string; user: Record<string, unknown> }>(
      "/auth/login",
      {
        method: "POST",
        body: { email, password },
      }
    ),

  me: (token: string) =>
    apiFetch<Record<string, unknown>>("/auth/me", { token }),

  logout: () => apiFetch("/auth/logout", { method: "POST" }),
};

export const apiSafe = {
  register: (email: string, password: string, name?: string) =>
    safeApiFetch("/auth/signup", {
      method: "POST",
      body: { email, password, name },
    }),

  login: (email: string, password: string) =>
    safeApiFetch<{ accessToken: string; user: Record<string, unknown> }>(
      "/auth/login",
      {
        method: "POST",
        body: { email, password },
      }
    ),

  me: (token: string) =>
    safeApiFetch<Record<string, unknown>>("/auth/me", { token }),

  logout: () => safeApiFetch("/auth/logout", { method: "POST" }),
};
