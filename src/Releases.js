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
        <Typography variant="h4" gutterBottom>
            Releases
        </Typography>
        <Card>
            <CardContent>
                <Typography variant="body1">
                    Our album will go here
                </Typography>
            </CardContent>
        </Card>
      </div>
    )
}
