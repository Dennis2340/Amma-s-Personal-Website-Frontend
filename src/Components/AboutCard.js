import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({user}) {

  const url = user.pictureUrl
  const filename = url.split("/")
  const mainUrl = filename[filename.length - 1]
  console.log(mainUrl)

  return (
    <Card sx={{ minWidth: 275, marginBottom: 5, width: {xs : "50%", sm: "100%"} }}>
      <CardContent>
        <Typography  variant='h5' color="text.secondary" >
           {user.userName}
        </Typography>
        <Box sx={{marginTop: 3}}>
        <Typography sx={{marginTop: 2}} variant="body2">
          {user.userDescription}
        </Typography>
        </Box>
        <Box sx={{marginTop: 4, marginBottom: 4}}>
        <img src={user.pictureUrl} alt='The owner is smiling'/>
        </Box>
        <Box>
        <Typography variant='h5' component="h2">
          Ways to contact me
        </Typography>
        </Box>
        <Box>
        <Typography sx={{ marginTop: 1}} variant="body2">
          {
            `please contact me for any additional info by phone +232${user.userPhoneNumber.slice(1)} or by email ${user.userEmail}`
          }
        </Typography>
        </Box>
      </CardContent>
      
    </Card>
  );
}
