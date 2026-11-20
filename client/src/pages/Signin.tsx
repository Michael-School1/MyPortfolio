import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Alert from "@mui/material/Alert"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import AuthLayout from "../components/AuthLayout"
import FormField from "../components/forms/FormField"
import { signin } from "../lib/api"
import { useAuth } from "../lib/useAuth"

interface SigninValues {
  email: string
  password: string
}

function Signin() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const { control, handleSubmit } = useForm<SigninValues>({
    defaultValues: { email: "", password: "" },
  })

  // A message passed from the Sign Up page, e.g. "Account created"
  const notice = (location.state as { notice?: string } | null)?.notice

  async function submitForm(values: SigninValues) {
    setError("")
    setLoading(true)
    try {
      const session = await signin(values.email, values.password)
      login(session)
      navigate("/")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not sign in")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout code="auth/signin.exe" title="Sign In">
      <form onSubmit={handleSubmit(submitForm)} noValidate>
        <Stack spacing={3} sx={{ mt: 3 }}>
          {notice && <Alert severity="success">{notice}</Alert>}
          {error && <Alert severity="error">{error}</Alert>}

          <FormField
            name="email"
            control={control}
            label="Email"
            type="email"
            autoComplete="email"
            rules={{ required: "Email is required" }}
          />

          <FormField
            name="password"
            control={control}
            label="Password"
            type="password"
            autoComplete="current-password"
            rules={{ required: "Password is required" }}
          />

          <Button type="submit" variant="contained" size="large" disabled={loading}>
            {loading ? "Signing in..." : "Submit"}
          </Button>

          <Typography variant="body2" align="center" color="text.secondary">
            No account?{" "}
            <Link to="/signup" className="text-cyan-400 hover:underline">
              Sign up
            </Link>
          </Typography>
        </Stack>
      </form>
    </AuthLayout>
  )
}

export default Signin
