// @flow
import type { State } from '../../common/types';
import React from 'react';
import linksMessages from '../../common/app/linksMessages';
import { Box, Loading, PageHeader } from '../../common/components';
import { Title } from '../components';
import { compose } from 'ramda';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import ContactFormError from './ContactFormError';

type ContactPageProps = {
  disabled: boolean,
  intl: $IntlShape,
};

const ContactPage = ({
  intl,
  disabled,
}: ContactPageProps) => (
    <Box>
      <Title message={linksMessages.contact} />
      <PageHeader heading={intl.formatMessage(linksMessages.contact)} />
      <ContactForm />
      <ContactFormError />
      {disabled &&
        <Loading marginVertical={1} />
      }
    </Box>
);

export default compose(
  connect(
    (state: State) => ({
      disabled: state.contact.formDisabled,
    }),
  ),
  injectIntl,
)(ContactPage);
