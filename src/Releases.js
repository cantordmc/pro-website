import React from 'react';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Album1 from "./static/images/cards/album1.png";


import { makeStyles } from '@mui/styles';


export default function Site(){

    return(
      <div>
        <iframe src="https://open.spotify.com/embed/album/1rQEmirfkogwbXY56wuDrC" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </div>
    )
}
