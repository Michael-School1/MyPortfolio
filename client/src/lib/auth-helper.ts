import type { Session } from "./types"

// The signed-in user's token and details are kept in sessionStorage,
// so they are cleared when the browser tab is closed.
const STORAGE_KEY = "jwt"

export function authenticate(session: Session) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(session))
}

export function getSession(): Session | null {
  const saved = sessionStorage.getItem(STORAGE_KEY)
  if (!saved) return null
  try {
    return JSON.parse(saved) as Session
  } catch {
    return null
  }
}

export function clearSession() {
  sessionStorage.removeItem(STORAGE_KEY)
}
