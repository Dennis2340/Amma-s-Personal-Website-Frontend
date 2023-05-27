import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { TextField } from '@mui/material';
import DenseAppBar from '../Components/BasicBar';
import {Button} from '@mui/material';
import { Password } from '@mui/icons-material';
const Registration = (props) => {

    return (

    <div>
        <Box>
            <DenseAppBar/>
        </Box>

        <Box
        sx={{textAlign: "center", marginTop: 5}}
        >
            <Typography variant='h4' component="h3">
                Registration
            </Typography>
        </Box>

        <Box
        sx={{
            display: {xs:"block", sm: "block"},
             marginTop: 5,
             marginLeft: "auto",
             marginRight: "auto",
             width: {xs: "75%", sm: "50%"}
                
        }}
        
        >  
            <div
             style={{
                marginTop: 40,
                height: 50,
                
                
            }}
            >
            <div>
             <TextField 
             id="outlined-basic" 
             label="FullName" 
             variant="outlined" 
             fullWidth
             />
             </div>
            </div>
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
             <TextField 
             id="outlined-basic" 
             label="PhoneNumber" 
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
           type="file"
            label="Choose an Image"
            InputLabelProps={{
                shrink: true,
            }}
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
             label="About" 
             multiline 
             variant="outlined" 
             fullWidth
             rows={5}
             />
            </div>
            <div
            style={{
                
                marginTop: 140,
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

Registration.propTypes = {};

export { Registration };