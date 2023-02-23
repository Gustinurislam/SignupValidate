import { Checkbox, FormControlLabel } from "@mui/material"
import { Controller } from "react-hook-form"

const CheckboxFields = ({ name, control }) => {
    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <FormControlLabel control={<Checkbox {...field} required />} label='I Agree to MyApp Terms and Privacy Policy' />
                )}
            />
        </>
    )
}

export default CheckboxFields
