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
import EntryForm from "./forms/EntryForm"
import { createEntry, listEntries, removeEntry, updateEntry } from "../lib/api"
import type { EntryCollection } from "../lib/api"
import { useAuth } from "../lib/useAuth"
import type { Entry, EntryInput } from "../lib/types"

interface EntryManagerProps {
  collection: EntryCollection
  sectionCode: string
  heading: string
  singular: string
}

const emptyEntry: EntryInput = {
  title: "",
  firstname: "",
  lastname: "",
  email: "",
  completion: "",
  description: "",
}

// Turns a saved entry into form values (the date input needs YYYY-MM-DD)
function toFormValues(entry: Entry): EntryInput {
  return {
    title: entry.title ?? "",
    firstname: entry.firstname ?? "",
    lastname: entry.lastname ?? "",
    email: entry.email ?? "",
    completion: entry.completion ? entry.completion.slice(0, 10) : "",
    description: entry.description ?? "",
  }
}

function formatDate(date?: string) {
  if (!date) return "No date"
  return new Date(date).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" })
}

// Shows the projects or qualifications saved in MongoDB.
// Everyone can read them. Only the admin sees the Add, Edit and Delete buttons.
function EntryManager({ collection, sectionCode, heading, singular }: EntryManagerProps) {
  const { isAdmin, isSignedIn } = useAuth()

  const [entries, setEntries] = useState<Entry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [notice, setNotice] = useState("")

  const [formOpen, setFormOpen] = useState(false)
  const [editing, setEditing] = useState<Entry | null>(null)
  const [deleting, setDeleting] = useState<Entry | null>(null)
  const [deleteBusy, setDeleteBusy] = useState(false)

  const loadEntries = useCallback(async () => {
    try {
      setEntries(await listEntries(collection))
      setError("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not load data")
    } finally {
      setLoading(false)
    }
  }, [collection])

  useEffect(() => {
    loadEntries()
  }, [loadEntries])

  function openAddForm() {
    setEditing(null)
    setFormOpen(true)
  }

  function openEditForm(entry: Entry) {
    setEditing(entry)
    setFormOpen(true)
  }

  async function saveEntry(values: EntryInput) {
    if (editing) {
      await updateEntry(collection, editing._id, values)
      setNotice(`${singular} updated.`)
    } else {
      await createEntry(collection, values)
      setNotice(`${singular} added.`)
    }
    setFormOpen(false)
    await loadEntries()
  }

  async function confirmDelete() {
    if (!deleting) return
    setDeleteBusy(true)
    try {
      await removeEntry(collection, deleting._id)
      setNotice(`${singular} deleted.`)
      setDeleting(null)
      await loadEntries()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not delete")
    } finally {
      setDeleteBusy(false)
    }
  }

  return (
    <section className="mt-16">

      {/* Section Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
            {sectionCode}
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight">
            {heading}
          </h2>
          <p className="mt-2 font-mono text-xs text-slate-600">
            {isAdmin
              ? "ADMIN MODE: you can add, edit and delete entries."
              : isSignedIn
                ? "READ ONLY: signed in as a user."
                : "READ ONLY: entries saved in the database."}
          </p>
        </div>

        {isAdmin && (
          <Button variant="contained" onClick={openAddForm}>
            + Add {singular}
          </Button>
        )}
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

      {/* Entries */}
      {loading ? (
        <div className="flex justify-center py-10">
          <CircularProgress />
        </div>
      ) : entries.length === 0 ? (
        <div className="border border-dashed border-slate-800 p-10 text-center font-mono text-xs text-slate-600">
          NO_ENTRIES_FOUND{isAdmin ? ` // click "Add ${singular}" to create one` : ""}
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {entries.map((entry) => (
            <Card key={entry._id} sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="overline" color="primary" sx={{ fontFamily: "monospace" }}>
                  {formatDate(entry.completion)}
                </Typography>
                <Typography variant="h6" fontWeight={800}>
                  {entry.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, whiteSpace: "pre-line" }}>
                  {entry.description}
                </Typography>
                <Typography variant="caption" color="text.secondary" component="p" sx={{ mt: 2, fontFamily: "monospace" }}>
                  {[entry.firstname, entry.lastname].filter(Boolean).join(" ")}
                  {entry.email ? ` // ${entry.email}` : ""}
                </Typography>
              </CardContent>

              {isAdmin && (
                <CardActions sx={{ borderTop: "1px solid #1e293b", justifyContent: "flex-end" }}>
                  <Button size="small" onClick={() => openEditForm(entry)}>
                    Edit
                  </Button>
                  <Button size="small" color="error" onClick={() => setDeleting(entry)}>
                    Delete
                  </Button>
                </CardActions>
              )}
            </Card>
          ))}
        </div>
      )}

      {/* Add / Edit form */}
      <Dialog open={formOpen} onClose={() => setFormOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{editing ? `Edit ${singular}` : `Add ${singular}`}</DialogTitle>
        <DialogContent>
          <EntryForm
            key={editing?._id ?? "new"}
            initialValues={editing ? toFormValues(editing) : emptyEntry}
            submitLabel={editing ? "Save Changes" : `Add ${singular}`}
            onSave={saveEntry}
            onCancel={() => setFormOpen(false)}
          />
        </DialogContent>
      </Dialog>

      <ConfirmDialog
        open={deleting !== null}
        title={`Delete ${singular}`}
        message={`Delete "${deleting?.title ?? ""}"? This cannot be undone.`}
        busy={deleteBusy}
        onCancel={() => setDeleting(null)}
        onConfirm={confirmDelete}
      />

    </section>
  )
}

export default EntryManager
