import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Service = (props) => {
    const {name,des,image}=props.service
    console.log(name)
  return (
    <div>
        <Card sx={{ maxWidth: 345 ,color:'gray',bgcolor:'green' }}>
      {/* <CardMedia
        sx={{ height: 140 }}
        image={picture}
        title="green iguana"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {des}
        </Typography>
      </CardContent>
      <CardActions>
        
        
      </CardActions>
    </Card>
    </div>
  )
}

export default Service