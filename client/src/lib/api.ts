import { getSession } from "./auth-helper"
import type { Contact, ContactInput, Entry, EntryInput, Session, User } from "./types"

// Every request goes to the Express backend. In development Vite forwards
// /api and /auth to port 3000; on the live site Express serves both.
async function request<T>(url: string, method = "GET", body?: unknown, withToken = false): Promise<T> {
  const headers: Record<string, string> = { Accept: "application/json" }
  if (body !== undefined) headers["Content-Type"] = "application/json"

  if (withToken) {
    const session = getSession()
    if (session) headers.Authorization = `Bearer ${session.token}`
  }

  const response = await fetch(url, {
    method,
    headers,
    credentials: "include",
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })

  const data = await response.json().catch(() => ({}))
  if (!response.ok) {
    throw new Error(data.error || `Request failed (${response.status})`)
  }
  return data as T
}

// ---------- Auth ----------
export const signin = (email: string, password: string) =>
  request<Session>("/auth/signin", "POST", { email, password })

export const signout = () => request<{ message: string }>("/auth/signout")

// ---------- Users ----------
export const signup = (user: { name: string; email: string; password: string }) =>
  request<{ message: string; user: User }>("/api/users", "POST", user)

// ---------- Contacts ----------
export const createContact = (contact: ContactInput) =>
  request<{ message: string; contact: Contact }>("/api/contacts", "POST", contact)

export const listContacts = () => request<Contact[]>("/api/contacts", "GET", undefined, true)

export const updateContact = (id: string, contact: ContactInput) =>
  request<Contact>(`/api/contacts/${id}`, "PUT", contact, true)

export const removeContact = (id: string) =>
  request<{ message: string }>(`/api/contacts/${id}`, "DELETE", undefined, true)

// ---------- Projects and qualifications ----------
// Both collections work the same way, so one set of functions handles both.
export type EntryCollection = "projects" | "qualifications"

export const listEntries = (collection: EntryCollection) =>
  request<Entry[]>(`/api/${collection}`)

export const createEntry = (collection: EntryCollection, entry: EntryInput) =>
  request<{ message: string }>(`/api/${collection}`, "POST", entry, true)

export const updateEntry = (collection: EntryCollection, id: string, entry: EntryInput) =>
  request<Entry>(`/api/${collection}/${id}`, "PUT", entry, true)

export const removeEntry = (collection: EntryCollection, id: string) =>
  request<{ message: string }>(`/api/${collection}/${id}`, "DELETE", undefined, true)
