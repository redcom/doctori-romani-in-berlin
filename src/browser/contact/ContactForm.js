// @flow
import type { State } from '../../common/types';
import React from 'react';
import buttonsMessages from '../../common/app/buttonsMessages';
import { FormattedMessage, injectIntl } from 'react-intl';

import { compose } from 'ramda';
import { connect } from 'react-redux';
import { fields } from '../../common/lib/redux-fields';
import { Form, focus } from '../components';
import {
  Box,
  OutlineButton,
  Field,
  FieldTextarea,
} from '../../common/components';

type ContactFormState = {
  forgetPasswordIsShown: boolean,
  recoveryContactFormSent: boolean,
};

type ContactFormProps = {
  disabled: boolean,
  fields: any,
  intl: $IntlShape,
};

const Button = ({ message, ...props }) => (
  <FormattedMessage {...message}>
    {(msg) => (
      <OutlineButton marginHorizontal={0.25} {...props}>
        {msg}
      </OutlineButton>
    )}
  </FormattedMessage>
);

const Buttons = (props) => (
  <Box
    flexDirection="row"
    flexWrap="wrap"
    marginVertical={1}
    marginHorizontal={-0.25}
    {...props}
  />
);

class ContactForm extends React.Component {
  state: ContactFormState = {
    forgetPasswordIsShown: false,
    recoveryContactFormSent: false,
  };

  onFormSubmit = () => {
  };

  props: ContactFormProps;

  render() {
    const { disabled, fields } = this.props;

    return (
      <Form onSubmit={this.onFormSubmit}>
        <Box marginTop={1}>
          <Field
            {...fields.email}
            label="Name"
            maxLength={100}
            placeholder="Jane Doe"
            // That's how we can show field error.
            // error="Name is required"
          />
          <FieldTextarea
            {...fields.message}
            label="Description"
            maxLength={500}
            lineHeight={1}
            placeholder="Some short description"
          />
        </Box>
         <Box>
              <Buttons>
                <Button
                  disabled={disabled}
                  message={buttonsMessages.submit}
                  onClick={this.onFormSubmit}
                />
              </Buttons>
         </Box>
      </Form>
    );
  }
}

export default compose(
  connect(
    (state: State) => ({
      disabled: state.auth.formDisabled,
      error: state.auth.error,
    }),
  ),
  injectIntl,
  fields({
    path: ['contact'],
    fields: ['email', 'message'],
  }),
  focus('error'),
)(ContactForm);

