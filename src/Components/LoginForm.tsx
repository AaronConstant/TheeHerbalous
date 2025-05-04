import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

type LoginFormInputs = {
    email: string;
    password: string;
}


const LoginForm: React.FC = () => {
    // create checkboxes for remember me and forgot password
    // create a function to handle form submission
    // create variables to handle Fetch requests and API calls
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
    const onSubmit = (values: any) => {
        console.log(values);}
    return (
        <Box>
            <Typography>Login</Typography>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <Box>
                    <TextField 
                    fullWidth
                    label="email"
                    type="email"
                    {...register('email',{
                        required: 'Email is required',
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                            message: 'Invalid email address'
                        }
                    })}
                    error={!!errors.email}
                    helperText = {errors.email?.message}
                    />
                </Box>
                <Box>
                    <TextField fullWidth
                    label="password"
                    type="password"
                    {...register('password', {
                        required: 'Password is required',
                        minLength: {
                            value: 6,
                            message: 'Password must be at least 6 characters long'
                        }
                    })}
                    error={!!errors.email}
                    helperText = {errors.email?.message}
                    />
                </Box>
                <button type="submit">Login</button>
            </form>
        </Box>
    );
};

export default LoginForm;