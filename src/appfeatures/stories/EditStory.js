import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Button,Box, Typography } from '@mui/material';
import DenseAppBar from '../../Components/BasicBar';
import { useFormik } from 'formik';
import { selectStoryById,updateStory, deleteStory } from './storySlice';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useState } from 'react'
import { useParams } from 'react-router-dom';
const EditStory = props => {

    const { id } = useParams()
    
    
    const story = useSelector(state => selectStoryById(state,id))
        
    const dispatch = useDispatch()
    const [addRequestStatus, setAddRequestStatus] = useState("idle")
    
    const handleDelete = () =>{
       dispatch(deleteStory(story))
    }

    const formik = useFormik({
        initialValues: {
        _id : id,
        storyTitle: story?.storyTitle,
        storyGenre: story?.storyGenre,
        storyDetailed: story?.storyDetailed,
        storyAuthor: story?.storyAuthor
        },
        onSubmit: (values) => {
            if(values){
            try{
              setAddRequestStatus("pending")
              dispatch(updateStory(values))  
              
            }catch(error){
                console.log(error.message)
            }
        
            
        }
    }
    })

    return (
    <div>
        <DenseAppBar/>
         <Box sx={{textAlign: "center", marginTop: 5}}>
            <Typography variant="h4" component="h3">
                Edit Story
            </Typography>
        </Box>

        <Box
          sx={{
            width: {xs: "75%", sm: "50%"},
            display: {xs:"block", sm: "block"},
            marginTop: 5,
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
            <div>
                <TextField
                 label="Title"
                 variant="outlined"
                fullWidth={true}
                name='storyTitle'
                value={formik.values.storyTitle}
                onChange={formik.handleChange}
                />
            </div>

            <div style={{marginTop: 40, marginButtom: "none"}}>
                <TextField
                 label="Genre"
                 variant="outlined"
                 fullWidth={true}
                 name='storyGenre'
                 value={formik.values.storyGenre}
                 onChange={formik.handleChange}
                />
            </div>

            <div style={{marginTop: 40, marginButtom: "none"}}>
                <TextField
                 label="Detailed"
                 variant="outlined"
                 fullWidth={true}
                 rows={4}
                 multiline
                 name='storyDetailed'
                 value={formik.values.storyDetailed}
                 onChange={formik.handleChange}
                />
            </div>

            <div style={{marginTop: 40, marginButtom: "none"}}>
                <TextField
                 label="Author"
                 variant="outlined"
                 fullWidth={true}
                 name='storyAuthor'
                 value={formik.values.storyAuthor}
                 onChange={formik.handleChange}
                />
            </div>

            <Box sx={{marginTop : 4}}>
                <Button
                 variant="contained"
                 fullWidth={true}
                 onClick={formik.handleSubmit}
                > 
                Update Story
                </Button>
                </Box>
                <Box sx={{marginTop : 2}}>
                <Button
                 variant="contained"
                 color='secondary'
                 fullWidth={true}
                 onClick={handleDelete}
                > 
                Delete Story
                </Button>
            </Box>

        </Box>

    </div>
    );
};

EditStory.propTypes = {};

export { EditStory };