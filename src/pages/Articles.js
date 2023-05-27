import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import BasicCard from '../Components/ArticleCard';
import ResponsiveDrawer from "../Components/ArticleAppBar"
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { fetchArticles, getAllArticles, getArticleError, getArticleStatus } from '../appfeatures/articles/articleSlice';

const Articles = props => {


  const dispatch = useDispatch()

  const articleList = useSelector(getAllArticles)
  console.log(articleList)
  const error = useSelector(getArticleError)
 
  const articleStatus = useSelector(getArticleStatus)
  
  useEffect(() => {
    if(articleStatus === "idle"){
      dispatch(fetchArticles())
      
    }
   }, [articleStatus, dispatch])

   let content;
   if(articleStatus === "loading"){
    return (
      <Box>
        <Typography variant='h3' component="h4">Loading...</Typography>
      </Box>
    )
   }
   else if(articleStatus === "succeeded"){
    const orderedArticle = articleList.slice().sort((a,b) => {
     if(a.date && b.date) return  b.date.localeCompare(a.date)
     
     return 0
   })
   console.log(orderedArticle)
  
   content = orderedArticle.map((article, index) => <BasicCard key={`${article._id}-${index}`} article= {article}/>)
     
    }
    else if (articleStatus === "failed"){
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
            ARTICLES
          </Typography>
          </Box>
          <Box sx={{marginLeft: 5, marginRight: 1}}>
            {content}
          </Box>
        </Box>
      
      
    </div>
    )
    ;
};

Articles.propTypes = {};

export { Articles };