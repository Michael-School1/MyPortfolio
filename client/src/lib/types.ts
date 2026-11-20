export type Role = "user" | "admin"

export interface User {
  _id: string
  name: string
  email: string
  role: Role
}

export interface Session {
  token: string
  user: User
}

export interface Contact {
  _id: string
  firstname: string
  lastname: string
  email: string
  contactNumber?: string
  message?: string
  created?: string
}

// Projects and qualifications have the same fields in the database
export interface Entry {
  _id: string
  title: string
  firstname?: string
  lastname?: string
  email?: string
  completion?: string
  description?: string
}

export type ContactInput = Omit<Contact, "_id" | "created">
export type EntryInput = Omit<Entry, "_id">
