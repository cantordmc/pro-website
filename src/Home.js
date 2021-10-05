import React from 'react';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { makeStyles } from '@mui/styles';


export default function Site(){

    return(
      <div>
        <Typography variant="h4" gutterBottom>
            Who We Are
        </Typography>
        <Card sx={{ maxWidth: window.innerWidth-600 }}>
            <CardContent>
                <Typography variant="body1" gutterBottom>
                    We like to produce music and help other UCSD students produce with us! We meet weekly Tuesdays at 5pm in CPMC 204.
                </Typography>
                <Link href="https://linktr.ee/PRO_at_UCSD" underline="none">
                <Button variant="contained">Discover Our Club</Button>
                </Link>
            </CardContent>
        </Card>
      </div>
    )
}
