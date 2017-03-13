// @flow
import React from 'react';
import messages from '../../common/addDoctor/Messages';
import { FormattedMessage } from 'react-intl';
import { Message } from '../../common/components';

const AddDoctorFormSuccess = () => {
  return (
    <Message backgroundColor="success">
       <FormattedMessage {...messages.addDoctorFormSuccess} />
    </Message>
  );
};

export default AddDoctorFormSuccess;

