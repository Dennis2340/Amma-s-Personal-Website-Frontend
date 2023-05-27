import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Button,Box, Typography } from '@mui/material';
import DenseAppBar from '../../Components/BasicBar';
import { useFormik } from 'formik';
import { addNewMotMsg } from './motmsgSlice';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useState } from 'react';
const AddMotMsg = props => {

    const dispatch = useDispatch()
    const [addRequestStatus, setAddRequestStatus] = useState("idle")
    
    const formik = useFormik({
        initialValues: {
            motMessageTitle: "",
            motMessageGenre: "",
            motMessageDetails: "",
            motMessageAuthor: ""
        },
        onSubmit: values => {
            if(values){
                try{
                  setAddRequestStatus("pending")
                  dispatch(addNewMotMsg(values))  
                  
                }catch(error){
                    console.log(error.message)
                }
            
                
            }
        }
    })
    return (
    <div>
        <Box sx={{textAlign: "center", marginTop: 5}}>
            <Typography variant="h4" component="h3">
                Add New Motivational Message
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
                name='motMessageTitle'
                value={formik.values.motMessageTitle}
                onChange={formik.handleChange}
                />
            </div>

            <div style={{marginTop: 40, marginButtom: "none"}}>
                <TextField
                 label="Genre"
                 variant="outlined"
                 fullWidth={true}
                 name='motMessageGenre'
                 value={formik.values.motMessageGenre}
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
                 name='motMessageDetails'
                 value={formik.values.articleDetails}
                onChange={formik.handleChange}
                />
            </div>

            <div style={{marginTop: 40, marginButtom: "none"}}>
                <TextField
                 label="Author"
                 variant="outlined"
                 fullWidth={true}
                 name='motMessageAuthor'
                 value={formik.values.articleAuthor}
                onChange={formik.handleChange}
                />
            </div>

            
            <Box sx={{marginTop : 4}}>
                <Button
                 variant="contained"
                 fullWidth={true}
                 onClick={formik.handleSubmit}
                > 
                Add MotMsg
                </Button>
            </Box>

        </Box>

    </div>
    );
};

AddMotMsg.propTypes = {};

export { AddMotMsg };