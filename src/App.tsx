import React from 'react';
import './App.css';
import Matas from "./Matas/Matas";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({
    typography: {
        fontFamily: "'Heebo-Regular', sans-serif"
    }
});

const App = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <Matas></Matas>
        </MuiThemeProvider>
    );
}

export default App;
