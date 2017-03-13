// @flow
import type { Action, Deps, Doctor } from '../types';
import messages from '../lib/redux-firebase/messages';
import { Observable } from 'rxjs/Observable';
import { ValidationError } from '../lib/validation';

export const saveForm = (doctor?: Doctor): Action => ({
  type: 'ADD_DOCTOR',
  payload: { doctor },
});

export const addDoctorDone = (doctor: Doctor): Action => ({
  type: 'ADD_DOCTOR_DONE',
  payload: {
    doctor,
  },
});

export const addDoctorFailed = (error: Error): Action => ({
  type: 'ADD_DOCTOR_FAIL',
  payload: {
    error,
  },
});

const validateForm = (validate, fields) => validate(fields)
  .prop('name')
    .required()
  .prop('address')
    .required()
  .promise;

const mapFirebaseErrorToEsteValidationError = (code) => {
  const prop = {
    'auth/invalid-email': 'email',
    'auth/wrong-password': 'password',
  }[code];
  return new ValidationError(code, { prop });
};

const addDoctorEpic = (
  action$: any,
  { firebase, getUid, validate, now }: Deps,
) => {

  const addDoctor = (doctor) => {
    const { expertize = '',
            validated = false,
            name = '',
            address = '',
            phones = ['aa', 'aaa'],
    } = doctor;
    const promises = [
      validateForm(validate, doctor),
      firebase.update({
        [`doctors/${getUid()}`]: {
          createdAt: now(),
          expertize,
          validated,
          name,
          address,
          phones,
        },
      }),
    ];

    return Observable.from(promises)
      .map((response) => addDoctorDone(response))
      .catch((error) => {
        if (messages[error.code]) {
          error = mapFirebaseErrorToEsteValidationError(error.code);
        }
        return Observable.of(addDoctorFailed(error));
      });
  };

  return action$
    .filter((action: Action) => action.type === 'ADD_DOCTOR')
    .mergeMap(({ payload: { doctor } }) => {
      return addDoctor(doctor);
    });
};

export const epics = [
  addDoctorEpic,
];

