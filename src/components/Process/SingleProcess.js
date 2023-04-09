import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, CardActions, CardContent, Typography } from '@mui/material';

const SingleProcess = (props) => {
    const{name,des,image}=props.process
  return (
    <article>
       <Typography>{name}</Typography>
       <p>{des}</p>
    </article>
  )
}

export default SingleProcess