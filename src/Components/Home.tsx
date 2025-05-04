import React from 'react';
import { Box, Paper } from '@mui/material';
import homeStyles from '../Styles/HomeStyling.module.scss'
import RevolvingBanner from './SubComponents/RevolvingBanner';
const Home: React.FC = () => {
    return (
        <Box  className={homeStyles.home}>
            <Paper className={homeStyles.welcoming_message}>Welcome to Thee Herbalous!</Paper>
            <RevolvingBanner />
            <div className='reference-banner'>
                <p>I am a reference</p>
            </div>
        </Box>
    );
};

export default Home;