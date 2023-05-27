import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import DenseAppBar from '../Components/BasicBar';
import {TextField} from '@mui/material';
import {Typography, Button} from '@mui/material';
const Login = props => {
    return (
    <div>
     <Box>
       <DenseAppBar/>
     </Box>

     <Box
         sx={{
            marginTop: 5,  
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
             fullWidth
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
             autoComplete="current-password"
             fullWidth
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