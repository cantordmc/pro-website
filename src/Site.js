import React from 'react';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

import SearchAppBar from './SearchAppBar';

const useStyles = makeStyles((theme) => ({
  backgroundPaper: {
    backgroundColor: "#112"
  }
}));

export default function Site(){
    const classes = useStyles();

    return(
            <Paper className={classes.backgroundPaper} square="true">
                <SearchAppBar />
            </Paper>
    )
}
