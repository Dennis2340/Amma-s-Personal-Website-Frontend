import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import BasicCard from '../Components/Card';
import ResponsiveDrawer from "../Components/PoemAppBar"
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { fetchPoems, getPoemError, getPoemStatus,getAllPoems } from '../appfeatures/poems/poemSlice';

const Poem = props => {

  const dispatch = useDispatch()

  const poemList = useSelector(getAllPoems)
  console.log(poemList)
  const error = useSelector(getPoemError)
  const poemStatus = useSelector(getPoemStatus)

   useEffect(() => {
    if(poemStatus === "idle"){
      dispatch(fetchPoems())
      
    }
   }, [poemStatus, dispatch])

   let content;
   if(poemStatus === "loading"){
    return (
      <Box>
        <Typography variant='h3' component="h4">Loading...</Typography>
      </Box>
    )
   }
   else if(poemStatus === "succeeded"){
   const orderedPoem = poemList.slice().sort((a,b) => {
    if(a.date && b.date) return  b.date.localeCompare(a.date)
    
    return 0
  })
   content = orderedPoem.map((poem, index) => <BasicCard key={`${poem._id}-${index}`} poem = {poem}/>)
   }
   else if (poemStatus === "failed"){
    content = <p>error maybe internet issue</p>
   }
    return (
  <>
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
            POEMS
          </Typography>
          </Box>
          <Box sx={{marginLeft: 5, marginRight: 1}}>
            {content}
          </Box>
        </Box>

    </div>
    
</>

    );
};

Poem.propTypes = {};

export { Poem };