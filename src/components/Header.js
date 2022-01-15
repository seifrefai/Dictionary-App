import React from 'react';
import'./Header.css';
import categories from '../data/category';
import {TextField,createTheme, ThemeProvider} from '@material-ui/core';
import MenuItem from "@material-ui/core/MenuItem";

const Header = ({category,setcategory, word, setword,LightTheme}) => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: LightTheme ? "#000" : "#FF0000",
            },

            type: LightTheme ? "light" : "dark",
        },
      });

    const handleChange= (Language) => {
        setcategory(Language);
        setword("")


    };

    return (
        <div className='header'>
            <span className='title'
            style={{
                color: LightTheme ? "black" : "red",
              }}> 
              {word ? word : "Word Dictionary"}</span>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}> 

                <TextField 
                    className="search" 
                    label="Search a word"
                    value={word}
                    onChange={(e) => setword(e.target.value)}     
                    />               

                <TextField 
                    className='select'
                    select
                    label="Language"
                    value={category}
                    onChange={(e) => handleChange(e.target.value)}
                    helperText="Please select your Language"
                    >
                        
                        {categories.map((option) => (
                        <MenuItem key={option.label} value={option.label}>
                        {option.value}
                        </MenuItem>
            ))}

                </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
