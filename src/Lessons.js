import React from 'react';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


import Lesson2 from "./static/images/cards/lesson2.jpg";

import Lesson3 from "./static/images/cards/lesson3.jpg";

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const columnWidth = Math.max(window.innerWidth-600, 250)


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 40,
  lineHeight: '40px',
}));


export default function Site(){

    return(
      <div>
        <Typography variant="h4" gutterBottom color="primary.light">
            Lessons
        </Typography>

        <Typography variant="body2">
            Coming soon...
        </Typography>
    /*
    <Card sx={{ width: columnWidth }}>
      <CardMedia
        wide
        component="img"
        image={Lesson2}
        alt="Drum Machine"
        height="250"
      />
      <CardContent>
        <Typography variant="h3" component="div">
          Creating a Beat
        </Typography>
        <Typography gutterBottom variant="h5" color="secondary">
            with Guy LaBorde
        </Typography>
        <Typography gutterBottom variant="subtitle1" color="text.secondary">
            Learn how to choose samples and arrange a beat pattern within your digital audio
            workstation. Learn common beat patterns, and how to add groove.
        </Typography>
        <Grid container spacing={1}>
        <Grid item xs={7}>
       </Grid>
       <Grid item xs={5}>
       <Item elevation={1}>
       <Typography variant="overline" color="text.primary" sm="none" md="">
           Tuesday October 12, 5:00 PM
       </Typography>
       </Item>
      </Grid>
      </Grid>
      </CardContent>
    </Card>

    <Card sx={{ width: columnWidth }}>
      <CardMedia
        wide
        component="img"
        image={Lesson3}
        alt="Electronic Keyboard"
        height="250"
      />
      <CardContent>
        <Typography variant="h3" component="div">
          Writing Chords
        </Typography>
        <Typography gutterBottom variant="h5" color="secondary">
            with Derek Cantor
        </Typography>
        <Typography gutterBottom variant="subtitle1" color="text.secondary">
            Learn how to use elemental music theory to make four chord progressions
            and adding variation. Learn about major and minor scales, modes, and non-diatonic chords.
        </Typography>
        <Grid container spacing={1}>
        <Grid item xs={7}>
       </Grid>
       <Grid item xs={5}>
       <Item elevation={1}>
       <Typography variant="overline" color="text.primary">
           Tuesday October 19, 5:00 PM
       </Typography>
       </Item>
      </Grid>
      </Grid>
      </CardContent>
    </Card>
    */
      </div>
    )
}
