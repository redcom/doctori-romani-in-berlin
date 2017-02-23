// @flow
import React from 'react';
import { Box, Image } from '../../common/components';
import { Link } from '../components';

const getWebsiteLogo = () => require('./doctori-romani-in-berlin.jpg');

const Logo = () => (
  <Box
    alignItems="center"
    marginVertical={1}
    paddingHorizontal={0.5}
    borderWidth={1}
    borderStyle="dotted"
  >
    <Link to="/">
      <Image
        src={getWebsiteLogo()}
        alt="Go to Pinstery Home"
        size={{ width: 250, height: 250 }}
      />
    </Link>
  </Box>
);

export default Logo;
