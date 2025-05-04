import React from 'react';
import { Box } from '@mui/material';


const LoginForm: React.FC = () => {
    // create checkboxes for remember me and forgot password
    // create a function to handle form submission
    // create variables to handle Fetch requests and API calls
    return (
        <Box>
            <h1>Login</h1>
            <form>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
        </Box>
    );
};

export default LoginForm;