import { HowToReg } from "@mui/icons-material"
import { Avatar, Box, Button, InputAdornment, Typography } from "@mui/material"
import CheckboxFields from "../components/CheckboxFields"
import SelectField from "../components/SelectField"
import TextFields from "../components/TextFields"

const RegisterForm = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: '4rem',
            alignItems: 'center'
        }}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <HowToReg />
            </Avatar>
            <Typography component='h1'>
                Sign Up
            </Typography>

            {/* Form  */}
            <Box component='form' sx={{ width: '100%', mt: '2rem' }}>
                <TextFields label='Full Name' />
                <TextFields label='Email' />
                <TextFields label='Mobile Phone' inputProps={{
                    startAdornment: <InputAdornment position="start" >+62</InputAdornment>,
                    type: 'number', max: '13'
                }} />
                <SelectField label='Country' />
                <TextFields label='Password' />
                <TextFields label='Confirm Password' />
                <CheckboxFields />

                <Button type='submit' fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
                    Sign Up
                </Button> 
            </Box>
        </Box>
    )
}

export default RegisterForm










