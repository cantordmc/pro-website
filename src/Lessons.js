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
            Lessons
        </Typography>
        <Card>
            <CardContent>
                <Typography variant="body1" gutterBottom>
                    Week 2: Making a Beat
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Week 3: Music Theory
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    Week 4: Baseline + Melody
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    Week 5: Sound Design
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    Week 6: Effects
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    Week 7: Layering
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    Week 8: Arranging a Full Song
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    Week 9: Mixing
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    Week 10: Mastering
                    </Typography>
            </CardContent>
        </Card>
      </div>
    )
}
