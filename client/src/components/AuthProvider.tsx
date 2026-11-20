import { useState } from "react"
import type { ReactNode } from "react"
import { AuthContext } from "../lib/authContext"
import { authenticate, clearSession, getSession } from "../lib/auth-helper"
import { signout } from "../lib/api"
import type { Session } from "../lib/types"

// Keeps the signed-in user in React state so every component
// (Navbar, Projects, Education, Contact) updates when they sign in or out.
function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(() => getSession())

  function login(newSession: Session) {
    authenticate(newSession)
    setSession(newSession)
  }

  async function logout() {
    clearSession()
    setSession(null)
    try {
      await signout()
    } catch {
      // The local session is already cleared, so a failed request is fine
    }
  }

  const value = {
    session,
    isSignedIn: session !== null,
    isAdmin: session?.user.role === "admin",
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
