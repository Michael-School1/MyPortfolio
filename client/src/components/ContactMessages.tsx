import { useCallback, useEffect, useState } from "react"
import Alert from "@mui/material/Alert"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CircularProgress from "@mui/material/CircularProgress"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import Typography from "@mui/material/Typography"
import ConfirmDialog from "./ConfirmDialog"
import ContactForm from "./forms/ContactForm"
import { listContacts, removeContact, updateContact } from "../lib/api"
import type { Contact, ContactInput } from "../lib/types"

function toFormValues(contact: Contact): ContactInput {
  return {
    firstname: contact.firstname ?? "",
    lastname: contact.lastname ?? "",
    contactNumber: contact.contactNumber ?? "",
    email: contact.email ?? "",
    message: contact.message ?? "",
  }
}

// Admin only: the messages sent from the contact form, with Edit and Delete.
// The parent page passes a new refreshKey after a message is sent so the list reloads.
function ContactMessages({ refreshKey }: { refreshKey: number }) {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [notice, setNotice] = useState("")
  const [editing, setEditing] = useState<Contact | null>(null)
  const [deleting, setDeleting] = useState<Contact | null>(null)
  const [deleteBusy, setDeleteBusy] = useState(false)

  const loadContacts = useCallback(async () => {
    try {
      setContacts(await listContacts())
      setError("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not load messages")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadContacts()
  }, [loadContacts, refreshKey])

  async function saveContact(values: ContactInput) {
    if (!editing) return
    await updateContact(editing._id, values)
    setEditing(null)
    setNotice("Message updated.")
    await loadContacts()
  }

  async function confirmDelete() {
    if (!deleting) return
    setDeleteBusy(true)
    try {
      await removeContact(deleting._id)
      setDeleting(null)
      setNotice("Message deleted.")
      await loadContacts()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not delete")
    } finally {
      setDeleteBusy(false)
    }
  }

  return (
    <section className="mt-16">

      <div className="mb-8">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
          ADMIN / INBOX
        </p>
        <h2 className="mt-3 text-3xl font-black tracking-tight">
          Contact Messages
        </h2>
        <p className="mt-2 font-mono text-xs text-slate-600">
          MESSAGES_RECEIVED: {String(contacts.length).padStart(2, "0")}
        </p>
      </div>

      {notice && (
        <Alert severity="success" onClose={() => setNotice("")} sx={{ mb: 3 }}>
          {notice}
        </Alert>
      )}
      {error && (
        <Alert severity="error" onClose={() => setError("")} sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {loading ? (
        <div className="flex justify-center py-10">
          <CircularProgress />
        </div>
      ) : contacts.length === 0 ? (
        <div className="border border-dashed border-slate-800 p-10 text-center font-mono text-xs text-slate-600">
          INBOX_EMPTY
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {contacts.map((contact) => (
            <Card key={contact._id} sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" fontWeight={800}>
                  {contact.firstname} {contact.lastname}
                </Typography>
                <Typography variant="caption" color="primary" component="p" sx={{ fontFamily: "monospace" }}>
                  {contact.email}
                  {contact.contactNumber ? ` // ${contact.contactNumber}` : ""}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, whiteSpace: "pre-line" }}>
                  {contact.message || "(no message)"}
                </Typography>
                {contact.created && (
                  <Typography variant="caption" color="text.secondary" component="p" sx={{ mt: 2, fontFamily: "monospace" }}>
                    {new Date(contact.created).toLocaleString()}
                  </Typography>
                )}
              </CardContent>
              <CardActions sx={{ borderTop: "1px solid #1e293b", justifyContent: "flex-end" }}>
                <Button size="small" onClick={() => setEditing(contact)}>
                  Edit
                </Button>
                <Button size="small" color="error" onClick={() => setDeleting(contact)}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={editing !== null} onClose={() => setEditing(null)} maxWidth="sm" fullWidth>
        <DialogTitle>Edit Message</DialogTitle>
        <DialogContent>
          <div className="pt-2">
            {editing && (
              <ContactForm
                key={editing._id}
                initialValues={toFormValues(editing)}
                submitLabel="Save Changes"
                resetAfterSave={false}
                onSave={saveContact}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      <ConfirmDialog
        open={deleting !== null}
        title="Delete Message"
        message={`Delete the message from ${deleting?.firstname ?? ""} ${deleting?.lastname ?? ""}? This cannot be undone.`}
        busy={deleteBusy}
        onCancel={() => setDeleting(null)}
        onConfirm={confirmDelete}
      />

    </section>
  )
}

export default ContactMessages
