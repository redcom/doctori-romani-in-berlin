
// @flow
import React from 'react';
import linksMessages from '../../common/app/linksMessages';
import { Box, PageHeader } from '../../common/components';
import { Title } from '../components';
import { compose } from 'ramda';
import { injectIntl } from 'react-intl';
import ContactForm from './ContactForm';

type ContactPageProps = {
  intl: $IntlShape,
};

const ContactPage = ({
  intl,
}: ContactPageProps) => (
    <Box>
      <Title message={linksMessages.contact} />
      <PageHeader heading={intl.formatMessage(linksMessages.contact)} />
      <ContactForm />
    </Box>
);

export default compose(
  injectIntl,
)(ContactPage);
