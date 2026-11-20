import type { ReactNode } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

// Page wrapper used by the Sign In and Sign Up pages
function AuthLayout({ code, title, children }: { code: string; title: string; children: ReactNode }) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative mx-auto flex max-w-7xl justify-center px-6 py-20">
        <Card sx={{ width: "100%", maxWidth: 480 }}>
          <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
              {code}
            </span>
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 bg-red-400" />
              <span className="h-2.5 w-2.5 bg-yellow-400" />
              <span className="h-2.5 w-2.5 bg-green-400" />
            </div>
          </div>
          <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
            <Typography variant="h4" align="center" fontWeight={900} gutterBottom>
              {title}
            </Typography>
            {children}
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

export default AuthLayout
