import { Controller } from "react-hook-form"
import type { Control, ControllerProps, FieldValues, Path } from "react-hook-form"
import TextField from "@mui/material/TextField"

interface FormFieldProps<T extends FieldValues> {
  name: Path<T>
  control: Control<T>
  label: string
  rules?: ControllerProps<T, Path<T>>["rules"]
  type?: string
  multiline?: boolean
  rows?: number
  autoComplete?: string
  shrinkLabel?: boolean
}

// A Material UI text field connected to react-hook-form.
// react-hook-form keeps the value in its form state and shows the validation message.
function FormField<T extends FieldValues>({
  name,
  control,
  label,
  rules,
  type = "text",
  multiline = false,
  rows,
  autoComplete,
  shrinkLabel = false,
}: FormFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { ref, value, ...field }, fieldState }) => (
        <TextField
          {...field}
          value={value ?? ""}
          inputRef={ref}
          id={name}
          label={label}
          type={type}
          multiline={multiline}
          rows={rows}
          autoComplete={autoComplete}
          fullWidth
          variant="outlined"
          error={Boolean(fieldState.error)}
          helperText={fieldState.error?.message ?? ""}
          slotProps={shrinkLabel ? { inputLabel: { shrink: true } } : undefined}
        />
      )}
    />
  )
}

export default FormField
