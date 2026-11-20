import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"

interface ConfirmDialogProps {
  open: boolean
  title: string
  message: string
  busy?: boolean
  onCancel: () => void
  onConfirm: () => void
}

function ConfirmDialog({ open, title, message, busy = false, onCancel, onConfirm }: ConfirmDialogProps) {
  return (
    <Dialog open={open} onClose={onCancel} maxWidth="xs" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onCancel} color="inherit">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="error" variant="contained" disabled={busy}>
          {busy ? "Deleting..." : "Delete"}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmDialog
