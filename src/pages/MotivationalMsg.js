import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import BasicCard from '../Components/MotMsgCard'
import ResponsiveDrawer from "../Components/MotMsgAppBar"
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { fetchMotMsg, getMotMsgError, getMotMsgStatus,getAllMotMsg } from '../appfeatures/motivationalmsg/motmsgSlice';

const MotivationalMsg = props => {

  const dispatch = useDispatch()

  const motmsgList = useSelector(getAllMotMsg)
  console.log(motmsgList)
  const error = useSelector(getMotMsgError)
  const motmsgStatus = useSelector(getMotMsgStatus)

  useEffect(() => {
    if(motmsgStatus === "idle"){
      dispatch(fetchMotMsg())
      
    }
   }, [motmsgStatus, dispatch])

   let content;
   if(motmsgStatus === "loading"){
    return (
      <Box>
        <Typography variant='h3' component="h4">Loading...</Typography>
      </Box>
    )
   }

   else if(motmsgStatus === "succeeded"){
    const orderedMotMsg = motmsgList.slice().sort((a,b) => {
     if(a.date && b.date) return  b.date.localeCompare(a.date)
     
     return 0
   })

   content = orderedMotMsg.map((motmsg, index) => <BasicCard key={`${motmsg._id}-${index}`} motmsg = {motmsg}/>)
  }
  else if (motmsgStatus === "failed"){
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
            Motivational Messages
          </Typography>
          </Box>
          <Box sx={{marginLeft: 5, marginRight: 1}}>
            {content}
          </Box>
        </Box>
      
    </div>
    );
};

MotivationalMsg.propTypes = {};

export { MotivationalMsg };