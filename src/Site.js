import React from 'react';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { styled, alpha } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors'

import SearchAppBar from './SearchAppBar';

const useStyles = makeStyles((theme) => ({
  backgroundPaper: {
    backgroundColor: "#112"
  }
}));

export default function Site(){
    const classes = useStyles();

    return(
        <div>
            <Paper elevation={0} className={classes.backgroundPaper} square="true">
                <SearchAppBar />
            </Paper>
        </div>
    )
}
