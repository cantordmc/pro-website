import React from 'react';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { styled, alpha } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors'

import SearchAppBar from './SearchAppBar';
import Menu from './Menu';

const pageWidth = Math.max(500, window.innerWidth-20);



const useStyles = makeStyles((theme) => ({
  backgroundPaper: {
    backgroundColor: "#112"
  }
}));

export default function Site(){
    const classes = useStyles();

    return(
        <div>
            <Box className={classes.backgroundPaper} width={pageWidth}>
                <SearchAppBar />
                <Menu />
            </Box>
        </div>
    )
}
