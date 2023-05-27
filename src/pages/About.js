import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import ResponsiveDrawer from '../Components/AppBar';

const About = props => {
    return (
    <div>
        <ResponsiveDrawer/>
      <Box
       sx={{
        marginLeft: 32,
        marginTop: -3,
        width: "75%"
      }}
      >
        <h2>THIS is the about section</h2>
      </Box>
    </div>
    );
};

About.propTypes = {};

export { About };