import { useState } from "react"
import { useForm } from "react-hook-form"
import Alert from "@mui/material/Alert"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import FormField from "./FormField"
import type { EntryInput } from "../../lib/types"

interface EntryFormProps {
  initialValues: EntryInput
  submitLabel: string
  onSave: (values: EntryInput) => Promise<void>
  onCancel: () => void
}

// The Project form and the Education (Qualification) form.
// Both have the same fields: title, first name, last name, email, completion date and description.
function EntryForm({ initialValues, submitLabel, onSave, onCancel }: EntryFormProps) {
  const [error, setError] = useState("")

  const { control, handleSubmit, formState: { isSubmitting } } = useForm<EntryInput>({
    defaultValues: initialValues,
  })

  async function submitForm(values: EntryInput) {
    setError("")
    try {
      await onSave(values)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    }
  }

  return (
    <form onSubmit={handleSubmit(submitForm)} noValidate>
      <Stack spacing={3} sx={{ pt: 1 }}>
        {error && <Alert severity="error">{error}</Alert>}

        <FormField name="title" control={control} label="Title" rules={{ required: "Title is required" }} />

        <Box sx={{ display: "grid", gap: 3, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" } }}>
          <FormField
            name="firstname"
            control={control}
            label="First Name"
            rules={{ required: "First name is required" }}
          />
          <FormField
            name="lastname"
            control={control}
            label="Last Name"
            rules={{ required: "Last name is required" }}
          />
        </Box>

        <FormField
          name="email"
          control={control}
          label="Email"
          type="email"
          rules={{
            required: "Email is required",
            pattern: { value: /.+@.+\..+/, message: "Please enter a valid email address" },
          }}
        />

        <FormField
          name="completion"
          control={control}
          label="Completion Date"
          type="date"
          shrinkLabel
          rules={{ required: "Completion date is required" }}
        />

        <FormField
          name="description"
          control={control}
          label="Description"
          multiline
          rows={4}
          rules={{ required: "Description is required" }}
        />

        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button onClick={onCancel} color="inherit">
            Cancel
          </Button>
          <Button type="submit" variant="contained" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : submitLabel}
          </Button>
        </Stack>
      </Stack>
    </form>
  )
}

export default EntryForm
