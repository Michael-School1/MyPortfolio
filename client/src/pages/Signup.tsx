import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import Alert from "@mui/material/Alert"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import AuthLayout from "../components/AuthLayout"
import FormField from "../components/forms/FormField"
import { signup } from "../lib/api"

interface SignupValues {
  name: string
  email: string
  password: string
}

function Signup() {
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const { control, handleSubmit } = useForm<SignupValues>({
    defaultValues: { name: "", email: "", password: "" },
  })

  async function submitForm(values: SignupValues) {
    setError("")
    setLoading(true)
    try {
      await signup(values)
      navigate("/signin", { state: { notice: "New account created. You can sign in now." } })
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not sign up")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout code="auth/signup.exe" title="Sign Up">
      <form onSubmit={handleSubmit(submitForm)} noValidate>
        <Stack spacing={3} sx={{ mt: 3 }}>
          {error && <Alert severity="error">{error}</Alert>}

          <FormField
            name="name"
            control={control}
            label="Name"
            autoComplete="name"
            rules={{ required: "Name is required" }}
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
            name="password"
            control={control}
            label="Password"
            type="password"
            autoComplete="new-password"
            rules={{
              required: "Password is required",
              minLength: { value: 6, message: "Password must be at least 6 characters" },
            }}
          />

          <Button type="submit" variant="contained" size="large" disabled={loading}>
            {loading ? "Creating account..." : "Submit"}
          </Button>

          <Typography variant="body2" align="center" color="text.secondary">
            Already have an account?{" "}
            <Link to="/signin" className="text-cyan-400 hover:underline">
              Sign in
            </Link>
          </Typography>
        </Stack>
      </form>
    </AuthLayout>
  )
}

export default Signup
