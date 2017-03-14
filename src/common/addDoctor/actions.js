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
  .prop('expertize')
    .required()
  .prop('phones')
    .required()
  .promise;

const mapFirebaseErrorToEsteValidationError = (code) => {
  const prop = {
    'auth/invalid-email': 'name',
    'auth/wrong-password': 'address',
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
            phones = '',
    } = doctor;
    const uuid = getUid();
    const promises =
      validateForm(validate, doctor)
        .then(
          firebase.update({
            [`doctors/${uuid}`]: {
              createdAt: now(),
              expertize,
              validated,
              name,
              address,
              phones,
              id: uuid,
            },
          })
        );

    return Observable.from(promises)
      .map((response) => { return addDoctorDone(response); })
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

