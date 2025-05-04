import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(251, 202, 202)', // Primary color
        },
        secondary: {
            main: 'rgb(112, 161, 112)', // Secondary color
        },
        error: {
            main: '#f44336', // Error color
        },
        warning: {
            main: '#ff9800', // Warning color
        },
        info: {
            main: '#2196f3', // Info color
        },
        success: {
            main: '#4caf50', // Success color
        },
        // customColor: {
        //     main: '#6a1b9a', // Custom color (you can name it anything)
        // },
    },
});

export default theme;