import { HowToReg } from "@mui/icons-material"
import { Avatar, Box, Button, InputAdornment, Typography } from "@mui/material"
import { useForm } from "react-hook-form"
import CheckboxFields from "../components/CheckboxFields"
import SelectField from "../components/SelectField"
import TextFields from "../components/TextFields"

const RegisterForm = () => {
    const { handleSubmit, control } = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            country: '',
            mobile: '',
            password: '',
            confirmPassword: '',
            privacy: false
        }
    })

    const onSubmit = (data) => {
        console.log(data);
    }

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
            <Box noValidate component='form' onSubmit={handleSubmit(onSubmit)} sx={{ width: '100%', mt: '2rem' }}>
                <TextFields control={control} name='fullName' label='Full Name' />
                <TextFields control={control} name='email' label='Email' />
                <TextFields control={control} name='mobile' label='Mobile Phone' inputProps={{
                    startAdornment: <InputAdornment position="start" >+62</InputAdornment>,
                    type: 'number', max: '13'
                }} />
                <SelectField control={control} name='country' label='Country' />
                <TextFields control={control} name='password' label='Password' />
                <TextFields control={control} name='confirmPassword' label='Confirm Password' />
                <CheckboxFields />

                <Button type='submit' fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
                    Sign Up
                </Button>
            </Box>
        </Box>
    )
}

export default RegisterForm










