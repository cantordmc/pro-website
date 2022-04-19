import React from 'react';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { makeStyles } from '@mui/styles';

const columnWidth = Math.max(window.innerWidth-600, 250)

export default function Site(){

    return(
      <div>
        <Typography variant="h4" gutterBottom color="primary.light">
            Who We Are
        </Typography>
        <Card sx={{ width: columnWidth}}>
            <CardContent>
                <Typography variant="h2">
                    We are PRO!
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Our mission is to lift up underheard voices in the electronic
                    music scene to showcase their unique sounds to the world.
                </Typography>
                <Link href="https://linktr.ee/PRO_at_UCSD" underline="none">
                <Button variant="contained">Discover Our Club</Button>
                </Link>
            </CardContent>
        </Card>
      </div>
    )
}
