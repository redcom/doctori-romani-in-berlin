// @flow
import React from 'react';
import { Box } from '../../common/components';
import { FormattedMessage, defineMessages } from 'react-intl';
import { Link } from '../components';

const messages = defineMessages({
  copyright: {
    defaultMessage: 'Copyright',
    id: 'footer.copyright',
  },
});

const Footer = () => (
  <Box
    flex={1}
    alignSelf="stretch"
    flexDirection="row"
    borderTopWidth={1}
    borderStyle="solid"
  >
    <Box
      flexDirection="column"
      paddingVertical={1}
      minWidth="25%"
    >
      {'\u00a0'}
      <Link size={-1} to="/copyright">
        <FormattedMessage {...messages.copyright} />
      </Link>
    </Box>
  </Box>
);

export default Footer;
