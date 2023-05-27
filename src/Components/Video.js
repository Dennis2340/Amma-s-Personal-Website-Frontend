import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const VideoComp = ({video}) => {
    return (
    <div>
      <Card sx={{ minWidth: 275, marginBottom: 5, width: {xs : "50%", sm: "100%"} }}>
      <CardContent>
        <Typography  variant='h5' color="text.secondary" >
          {/* {video.title} */}
          title
        </Typography>
        <Box>
        <video controls>
        <source src={"f8e68ec5-7612-4900-a200-707831cff26a-JuiceWrldLinkUp.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
          </video> 
        </Box>
        <Typography sx={{ marginTop: 1}} variant="body2">
          
              {/* video.description */}
            testing
          
        </Typography>
        <NavLink to = {`/singlevideo/${video._id}`}>view</NavLink>
      </CardContent>
      
    </Card>
    </div>
    );
};


VideoComp.propTypes = {};

export { VideoComp };