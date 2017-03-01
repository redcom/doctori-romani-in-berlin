// @flow
import React from 'react';
import { Box, Image } from '../../common/components';
import { Link } from '../components';

const getWebsiteLogo = () => require('./doctori-romani-in-berlin.jpg');

const clipPathStyle = () => ({
  'clip-path': 'polygon(3% 5px, 100% 0%, 92% 60%, 62% 75%, 46% 110%, 50% 82%, 0% 75%)',
});
const Logo = () => (
  <Box
    alignItems="center"
    marginVertical={1}
    paddingHorizontal={0.5}
  >
    <Link to="/">
      <Image
        src={getWebsiteLogo()}
        alt="Inapoi pe prima pagina"
        size={{ width: 500, height: 200 }}
        style={clipPathStyle}
      />
    </Link>
  </Box>
);

export default Logo;
