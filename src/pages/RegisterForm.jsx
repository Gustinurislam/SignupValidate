import { Avatar, Box, Button, InputAdornment, Typography } from "@mui/material"
import { HowToReg } from "@mui/icons-material"
import { useForm } from "react-hook-form"
import CheckboxFields from "../components/CheckboxFields"
import SelectField from "../components/SelectField"
import TextFields from "../components/TextFields"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

// create schema validation
const schema = yup.object({
    fullName: yup.string().required('Full Name is required')
})

const RegisterForm = () => {
    const { handleSubmit, formState: { errors }, control } = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            country: '',
            mobile: '',
            password: '',
            confirmPassword: '',
            privacy: false
        },
        resolver: yupResolver(schema)
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
                <TextFields errors={errors} control={control} name='fullName' label='Full Name' />
                <TextFields errors={errors} control={control} name='email' label='Email' />
                <TextFields errors={errors} control={control} name='mobile' label='Mobile Phone' inputProps={{
                    startAdornment: <InputAdornment position="start" >+62</InputAdornment>,
                    type: 'number', max: '13'
                }} />
                <SelectField errors={errors} control={control} name='country' label='Country' />
                <TextFields errors={errors} control={control} name='password' label='Password' />
                <TextFields errors={errors} control={control} name='confirmPassword' label='Confirm Password' />
                <CheckboxFields errors={errors} control={control} name='privacy' />

                <Button type='submit' fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
                    Sign Up
                </Button>
            </Box>
        </Box>
    )
}

export default RegisterForm










