import { FormControl, MenuItem, TextField } from "@mui/material"

const SelectField = ({label}) => {
  return (
    <FormControl fullWidth sx={{ mb: '1rem' }} >
      <TextField required select label={label} variant="filled">
        <MenuItem value='None'>None</MenuItem>
        <MenuItem value='ID'>ID</MenuItem>
        <MenuItem value='US'>US</MenuItem>
      </TextField>
    </FormControl>
  )
}

export default SelectField
