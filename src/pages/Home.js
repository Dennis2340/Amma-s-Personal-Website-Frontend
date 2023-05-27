import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveDrawer from "../Components/AppBar"
import { Box, Typography } from '@mui/material';
const Home = (props) => {


    return (
    <div>
      <Box>
      <ResponsiveDrawer/>
      </Box>
       <Box
         sx={{
          marginLeft: {xs: 5,sm: 32},
          marginTop: -3,
          width: "75%"
        }}
       >
        <Typography variant = "body1" component = "p" paragraph>
        Immerse yourself in a world of inspiration and knowledge as we bring you a curated collection of poems, captivating stories, motivational speeches, thought-provoking articles, and engaging videos.
       Whether you seek solace in the beauty of poetry, enjoy the power of storytelling, or desire to gain insights from motivational speeches, our platform is here to ignite your imagination and broaden your horizons.
      Discover the enchanting realm of poems where words dance on the page, evoking emotions and painting vivid imagery. Explore the captivating stories that transport you to different worlds, leaving you spellbound with every turn of the page.
      Let the motivational speeches uplift your spirits, instilling a sense of purpose and encouraging you to embrace your full potential. Engage with thought-provoking articles that offer valuable insights, diverse perspectives, and a deeper understanding of the world around us.
       And that's not all! We have carefully curated a collection of related videos that complement the themes explored in our content, providing you with a multimedia experience that stimulates both the mind and the senses.
      Whether you are here to find solace, gain knowledge, or simply explore the realms of creativity, we invite you to embark on this journey with us. Let the words, stories, speeches, articles, and videos inspire, motivate, and entertain you.
      Welcome to a world of inspiration and enlightenment. Enjoy your exploration!
        </Typography>
       </Box>
    </div>
    );
};

Home.propTypes = {};

export { Home };