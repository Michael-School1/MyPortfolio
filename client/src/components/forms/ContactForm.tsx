import { useState } from "react"
import { useForm } from "react-hook-form"
import Alert from "@mui/material/Alert"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import FormField from "./FormField"
import type { ContactInput } from "../../lib/types"

interface ContactFormProps {
  initialValues?: ContactInput
  submitLabel?: string
  successMessage?: string
  resetAfterSave?: boolean
  onSave: (values: ContactInput) => Promise<void>
}

const emptyContact: ContactInput = {
  firstname: "",
  lastname: "",
  contactNumber: "",
  email: "",
  message: "",
}

// Contact form built with react-hook-form and Material UI.
// Used on the Contact page and when the admin edits a message.
function ContactForm({
  initialValues = emptyContact,
  submitLabel = "Send Message",
  successMessage = "",
  resetAfterSave = true,
  onSave,
}: ContactFormProps) {
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const { control, handleSubmit, reset, formState: { isSubmitting } } = useForm<ContactInput>({
    defaultValues: initialValues,
  })

  async function submitForm(values: ContactInput) {
    setStatus(null)
    try {
      await onSave(values)
      if (resetAfterSave) reset(emptyContact)
      if (successMessage) setStatus({ type: "success", text: successMessage })
    } catch (err) {
      setStatus({ type: "error", text: err instanceof Error ? err.message : "Something went wrong" })
    }
  }

  return (
    <form onSubmit={handleSubmit(submitForm)} noValidate>
      <Stack spacing={3}>
        {status && <Alert severity={status.type}>{status.text}</Alert>}

        <Box sx={{ display: "grid", gap: 3, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" } }}>
          <FormField
            name="firstname"
            control={control}
            label="First Name"
            autoComplete="given-name"
            rules={{ required: "First name is required" }}
          />
          <FormField
            name="lastname"
            control={control}
            label="Last Name"
            autoComplete="family-name"
            rules={{ required: "Last name is required" }}
          />
        </Box>

        <FormField
          name="contactNumber"
          control={control}
          label="Contact Number"
          type="tel"
          autoComplete="tel"
          rules={{ required: "Contact number is required" }}
        />

        <FormField
          name="email"
          control={control}
          label="Email"
          type="email"
          autoComplete="email"
          rules={{
            required: "Email is required",
            pattern: { value: /.+@.+\..+/, message: "Please enter a valid email address" },
          }}
        />

        <FormField
          name="message"
          control={control}
          label="Message"
          multiline
          rows={6}
          rules={{ required: "Message is required" }}
        />

        <Button type="submit" variant="contained" size="large" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : submitLabel}
        </Button>
      </Stack>
    </form>
  )
}

export default ContactForm
