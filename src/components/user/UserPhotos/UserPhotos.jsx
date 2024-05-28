import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function UserPhotos () {
  return (
    <div className="user-photos">
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Photos and Videos
          </Typography>
          <Button size="small">See All</Button> 
        </CardContent>
        <CardActions>
          <span>Photos go here...</span>
        </CardActions>
      </Card>
    </div>
  );
}
  