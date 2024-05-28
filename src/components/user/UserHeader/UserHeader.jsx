import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function UserHeader () {
  return (
    <div className="user-header">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 280 }}
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
      </Card>
    </div>
  );
}
