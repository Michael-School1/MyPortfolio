import { createContext } from "react"
import type { Session } from "./types"

export interface AuthState {
  session: Session | null
  isSignedIn: boolean
  isAdmin: boolean
  login: (session: Session) => void
  logout: () => Promise<void>
}

export const AuthContext = createContext<AuthState | null>(null)
