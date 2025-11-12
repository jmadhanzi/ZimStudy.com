export const getToken = (): string | null => {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('token')
}

export const setToken = (token: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', token)
  }
}

export const removeToken = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }
}

export const getUser = (): any | null => {
  if (typeof window === 'undefined') return null
  const user = localStorage.getItem('user')
  return user ? JSON.parse(user) : null
}

export const setUser = (user: any): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('user', JSON.stringify(user))
  }
}

export const isAuthenticated = (): boolean => {
  return !!getToken()
}
