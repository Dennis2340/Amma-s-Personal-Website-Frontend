import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import DenseAppBar from '../Components/BasicBar';
import {TextField} from '@mui/material';
import {Typography, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

const Login = props => {

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            userEmail: "",
            userPassword: "",
            
        },
        onSubmit: values => {
            if(values){
                try{
                  
                  
                 console.log(values)
                  
                }catch(error){
                    console.log(error.message)
                }
            
                
            }
        }
    })


    return (
    <div>
     <Box>
       <DenseAppBar/>
     </Box>

     <Box
         sx={{
            marginTop: 13,  
            textAlign: "center"
            }}
            >
                <Typography variant='h4' component="h2">
                    Login
                </Typography>
        </Box>
     <Box
        sx={{
            display: {xs:"block", sm: "block"},
            marginTop: 5,
            marginLeft: "auto",
            marginRight: "auto",
            // width: "50%"
            width: {xs: "75%", sm: "50%"}
            
        }}
        >  
            <div
             style={{
                marginTop: 40,
                height: 50,  
            }}
            >
             <TextField 
             id="outlined-basic" 
             label="Email" 
             variant="outlined" 
             name='userEmail'
             fullWidth
             value={formik.values.userEmail}
             />
            </div>
            <div
             style={{
                marginTop: 40,
                height: 50,  
            }}
            >
             <TextField 
             id="outlined-basic" 
             label="Password"
             type="password"
             name='userPassword'
             autoComplete="current-password"
             fullWidth
             value={formik.values.userPassword}
             />
            </div>
            <div
            style={{
                
                marginTop: 40,
                height: 50,
                
                
            }}
            >
                <Button 
                variant="contained"
                fullWidth
                >
                    SignUp
                </Button>

            </div>
        </Box>
    </div>
    );
};

Login.propTypes = {};

export { Login };