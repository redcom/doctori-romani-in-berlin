// @flow
import React from 'react';
import linksMessages from '../../common/app/linksMessages';
import { Box, PageHeader, Paragraph } from '../../common/components';
import { Title } from '../components';

const Copyright = () => (
  <Box>
    <Title message={linksMessages.copyright} />
    <PageHeader
      description="Despre copyright-ul doctori-romani-in-berlin"
      heading="Copyright"
    />
    <Paragraph>
      Ai dreptul sa copii si sa reproduci acest site
    </Paragraph>
  </Box>
);

export default Copyright;

