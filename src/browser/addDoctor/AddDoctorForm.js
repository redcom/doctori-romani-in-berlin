// @flow
import type { State } from '../../common/types';
import React from 'react';
import buttonsMessages from '../../common/app/buttonsMessages';
import { FormattedMessage, injectIntl } from 'react-intl';

import { compose } from 'ramda';
import { connect } from 'react-redux';
import { fields } from '../../common/lib/redux-fields';
import { saveForm } from '../../common/addDoctor/actions';
import { Form, focus } from '../components';
import {
  Box,
  OutlineButton,
  Field,
} from '../../common/components';

type AddDoctorFormProps = {
  saveForm: typeof saveForm,
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

class AddDoctorForm extends React.Component {

  onFormSubmit = () => {
    const { fields, saveForm } = this.props;
    saveForm(fields.$values());
    fields.$reset();
  };

  props: AddDoctorFormProps;

  render() {
    const { disabled, fields } = this.props;

    return (
      <Form onSubmit={this.onFormSubmit}>
        <Box marginTop={1}>
          <Field
            {...fields.name}
            label="Name"
            disabled={disabled}
            maxLength={100}
            placeholder="Nume doctor"
          />
          <Field
            {...fields.address}
            label="Address"
            disabled={disabled}
            maxLength={100}
            placeholder="Adresa doctor"
          />
        </Box>
         <Box>
              <Buttons>
                <Button
                  disabled={disabled}
                  message={buttonsMessages.add}
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
      disabled: state.addDoctor.formDisabled,
      error: state.addDoctor.error,
    }),
    { saveForm }
  ),
  injectIntl,
  fields({
    path: ['addDoctor'],
    fields: ['name', 'address'],
    getInitialState: () => ({
    }),
  }),
  focus('error'),
)(AddDoctorForm);

