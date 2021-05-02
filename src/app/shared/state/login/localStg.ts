const TOKEN_KEY = 'token';
const IS_REMEMBER_KEY = 'rememberCurrentUser';

export function getToken(): string {
  return localStorage.getItem(TOKEN_KEY);
}

export function storeToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
}

export function removeToken(): void{
  localStorage.removeItem(TOKEN_KEY);
}

// export function store
