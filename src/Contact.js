import React from 'react';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


import { makeStyles } from '@mui/styles';


export default function Site(){

    return(
      <div>
        <Typography variant="h4" gutterBottom color="primary.light">
            Contact
        </Typography>
        <Card>
            <CardContent>
                <Typography variant="body1" gutterBottom>
                    President: Caleb Van (cwvan@ucsd.edu)
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Event Coordinator: Guy LaBorde (glaborde@ucsd.edu)
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Lesson Coordinator: Derek Cantor (dmcantor@ucsd.edu)
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Media Manager: Chaz Hirales (chirales@ucsd.edu)
                </Typography>
            </CardContent>
        </Card>
      </div>
    )
}
