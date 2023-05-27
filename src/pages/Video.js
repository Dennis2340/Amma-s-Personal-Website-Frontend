import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import  { VideoComp } from '../Components/Video';
import ResponsiveDrawer from "../Components/VideoAppBar"
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { fetchVideos, getVideoError, getVideoStatus,getAllVideos } from '../appfeatures/videos/videoSlice';

const Video = props => {


  const dispatch = useDispatch()

  const videoList = useSelector(getAllVideos)
  console.log(videoList)
  const error = useSelector(getVideoError)
  const videoStatus = useSelector(getVideoStatus)


  useEffect(() => {
    if(videoStatus === "idle"){
      dispatch(fetchVideos())
      
    }
   }, [videoStatus, dispatch])

   let content;
   if(videoStatus === "loading"){
    return (
      <Box>
        <Typography variant='h3' component="h4">Loading...</Typography>
      </Box>
    )
   }
   else if(videoStatus === "succeeded"){
   const orderedVideo = videoList.slice().sort((a,b) => {
    if(a.date && b.date) return  b.date.localeCompare(a.date)
    
    return 0
  })

  content = orderedVideo.map((video, index) => <VideoComp key={`${video._id}-${index}`} video = {video}/>)
}

else if (videoStatus === "failed"){
  content = <p>error maybe internet issue</p>
 }
    return (
    <div>
        <ResponsiveDrawer/>
        <Box
         sx={{
             marginLeft: {xs: 1,sm: 32},
            marginTop: -3,
            width: "75%"
          }}
        >
       
         <Box sx={{marginLeft: {xs: 14, sm:45}, marginBottom: 5}}>
          <Typography  variant='h4' component="h1">
            VIDEOS
          </Typography>
          </Box>
          <Box sx={{marginLeft: 3.7, marginRight: 1}}>
           {content}
          </Box>
        </Box>
        
    </div>
    );
};

Video.propTypes = {};

export { Video };