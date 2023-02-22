import { Checkbox, FormControlLabel } from "@mui/material"

const CheckboxFields = () => {
    return (
        <FormControlLabel control={<Checkbox defaultChecked />} label='I Agree to MyApp Terms and Privacy Policy' />
    )
}

export default CheckboxFields
