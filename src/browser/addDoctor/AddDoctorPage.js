// @flow
import type { State } from '../../common/types';
import React from 'react';
import linksMessages from '../../common/app/linksMessages';
import { Box, Loading, PageHeader } from '../../common/components';
import { Title } from '../components';
import { compose } from 'ramda';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import AddDoctorForm from './AddDoctorForm';
import AddDoctorFormError from './AddDoctorFormError';
import AddDoctorFormSuccess from './AddDoctorFormSuccess';

type AddDoctorPageProps = {
  intl: $IntlShape,
  disabled: boolean,
  formSuccess: boolean,
};

const AddDoctorPage = ({
  intl,
  disabled,
  formSuccess,
}: AddDoctorPageProps) => {
  return (
      <Box>
        <Title message={linksMessages.addDoctor} />
        <PageHeader heading={intl.formatMessage(linksMessages.addDoctor)} />
        {!formSuccess &&
          <AddDoctorForm />
        }

        {formSuccess &&
          <AddDoctorFormSuccess />
        }

        <AddDoctorFormError />

        {disabled &&
          <Loading marginVertical={1} />
        }
      </Box>
  );
};

export default compose(
  connect(
    (state: State) => ({
      disabled: state.addDoctor.formDisabled,
      formSuccess: state.addDoctor.formSuccess,
    }),
  ),
  injectIntl,
)(AddDoctorPage);

