import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Button,Box, Typography } from '@mui/material';
import DenseAppBar from '../../Components/BasicBar';
import { useFormik } from 'formik';
import { addNewVideo } from './videoSlice';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddVideo = props => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [addRequestStatus, setAddRequestStatus] = useState("idle")
    
    const formik = useFormik({
        initialValues: {
        title: "",
        description: "",
        videoUrl: "",
        },
        onSubmit: (values) => {
            if(values){
            try{
              setAddRequestStatus("pending")
              dispatch(addNewVideo(values))  

               console.log(values.videoUrl)
                //   values.title = ""
                //   values.description = ""
                //   values.video = ""
                //   navigate("/video") 
              
            }catch(error){
                console.log(error.message)
            }
        
            
        }
    }
    })
    return (
    <div>
        <DenseAppBar/>
         <Box sx={{textAlign: "center", marginTop: 12}}>
            <Typography variant="h4" component="h3">
                Add New Video
            </Typography>
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
                name='title'
                value={formik.values.title}
                onChange={formik.handleChange}
                />
            </div>
            <div style={{marginTop: 40, marginButtom: "none"}}>
                <TextField
                 label="Choose Video"
                 variant="outlined"
                 type='file'
                 fullWidth={true}
                 name='video'
                 InputLabelProps={{
                    shrink: true,
                }}
                 value={formik.values.video}
                 onChange={formik.handleChange}
                />
            </div>
           {/* <div>
            <TextField
           type="file"
            label="Choose an Image"
            InputLabelProps={{
                shrink: true,
            }}
            fullWidth
          />
      
            </div> */}

            <div style={{marginTop: 40, marginButtom: "none"}}>
                <TextField
                 label="Description"
                 variant="outlined"
                 rows={4}
                 multiline
                fullWidth={true}
                name='description'
                value={formik.values.description}
                onChange={formik.handleChange}
                />
            </div>

            <Box sx={{marginTop : 4}}>
                <Button
                 variant="contained"
                 fullWidth={true}
                 onClick={formik.handleSubmit}
                > 
                Add Video
                </Button>
            </Box>

            </Box>
        </Box>
    </div>
    );
};

AddVideo.propTypes = {};

export { AddVideo };