import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Button,Box, Typography } from '@mui/material';
import DenseAppBar from '../../Components/BasicBar';
import { useFormik } from 'formik';
import { addNewArticle, fetchArticles } from './articleSlice';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AddArticle = props => {
 
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const [addRequestStatus, setAddRequestStatus] = useState("idle")
    
    const formik = useFormik({
        initialValues: {
            articleTitle: "",
            articleGenre: "",
            articleDetails: "",
            articleAuthor: ""
        },
        onSubmit: values => {
            if(values){
                try{
                  setAddRequestStatus("pending")
                  dispatch(addNewArticle(values)) 
                  dispatch(fetchArticles())
                  values.articleAuthor = ""
                  values.articleDetails = ""
                  values.articleTitle = ""
                  values.articleGenre = ""
                  navigate("/articles")  
                  
                }catch(error){
                    console.log(error.message)
                }
            
                
            }
        }
    })

    // console.log("form values", formik.values)
    return (
    <div>
        <Box sx={{ marginBottom: 10}}>
        <DenseAppBar/>
        </Box>
        <Box sx={{textAlign: "center", marginTop: 12}}>
            <Typography variant="h4" component="h3">
                Add New Article
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
                name='articleTitle'
                value={formik.values.articleTitle}
                onChange={formik.handleChange}
                />
            </div>

            <div style={{marginTop: 40, marginButtom: "none"}}>
                <TextField
                 label="Genre"
                 variant="outlined"
                 fullWidth={true}
                 name='articleGenre'
                 value={formik.values.articleGenre}
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
                 name='articleDetails'
                 value={formik.values.articleDetails}
                onChange={formik.handleChange}
                />
            </div>

            <div style={{marginTop: 40, marginButtom: "none"}}>
                <TextField
                 label="Author"
                 variant="outlined"
                 fullWidth={true}
                 name='articleAuthor'
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
                Add Article
                </Button>
            </Box>
            
        </Box>

    </div>
    )
    ;
};

AddArticle.propTypes = {};

export { AddArticle };