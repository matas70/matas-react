import React from 'react';
import './App.css';
import Matas from "./Matas/Matas";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import {Headline} from "./headline/Headline";

const theme = createMuiTheme({
    typography: {
        fontFamily: "'Heebo-Regular', sans-serif"
    }
});

const App = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <Matas>
                <Headline></Headline>
            </Matas>
        </MuiThemeProvider>
    );
}

export default App;
