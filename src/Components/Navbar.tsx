import React from 'react';
import navStyles from '../Styles/NavStyling.module.scss';
import { Link } from 'react-router-dom';
import { Box, AppBar,Toolbar, Button } from '@mui/material';



const Navbar: React.FC = () => {
    return (
        <AppBar className={navStyles.navbar} position='static'>
            <Toolbar className={navStyles.navbar_toolbar}>
                <Box className={navStyles.nav_box}>
                    <Button className={navStyles.nav_item} component={Link} to="/">Home</Button>
                    <Button className={navStyles.nav_item}component={Link} to="/about">About</Button>
                    <Button className={navStyles.nav_item}component={Link} to="/contact">Contact Us</Button>
                    <Box>
                        <Button className={navStyles.nav_item}component={Link} to="/login">Login</Button>
                        <Button className={navStyles.nav_item}component={Link} to="/login">Sign Up</Button>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;