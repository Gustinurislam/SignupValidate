import { FormControl, TextField } from "@mui/material"
import { Controller } from "react-hook-form"

const TextFields = ({ label, inputProps, control, name }) => {
  return (
    <FormControl fullWidth sx={{ mb: '1rem' }} >
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField {...field} required label={label} variant="filled" InputProps={inputProps} />
        )}
      />
    </FormControl>
  )
}

export default TextFields
