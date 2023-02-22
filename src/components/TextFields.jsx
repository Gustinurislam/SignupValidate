import { FormControl, TextField } from "@mui/material"

const TextFields = ({label, inputProps}) => {
  return (
    <FormControl fullWidth sx={{ mb: '1rem' }} >
      <TextField required label={label} variant="filled" InputProps={inputProps} />
    </FormControl>
  )
}

export default TextFields
