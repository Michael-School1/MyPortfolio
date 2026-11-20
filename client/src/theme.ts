import { createTheme } from "@mui/material/styles"

// Material UI theme that matches the site's dark slate and cyan design
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#22d3ee", contrastText: "#020617" },
    secondary: { main: "#4ade80" },
    error: { main: "#f87171" },
    background: { default: "#020617", paper: "#0f172a" },
    text: { primary: "#f8fafc", secondary: "#94a3b8" },
    divider: "#1e293b",
  },
  shape: { borderRadius: 0 },
  typography: {
    fontFamily: "Roboto, system-ui, sans-serif",
    button: {
      fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
      fontWeight: 700,
      letterSpacing: "0.1em",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: { backgroundImage: "none", border: "1px solid #1e293b" },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: { backgroundImage: "none", border: "1px solid #1e293b" },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#020617",
          "& .MuiOutlinedInput-notchedOutline": { borderColor: "#334155" },
        },
      },
    },
  },
})

export default theme
