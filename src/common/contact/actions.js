// @flow
import type { Action, Deps } from '../types';
import messages from '../lib/redux-firebase/messages';
import { Observable } from 'rxjs/Observable';
import { ValidationError } from '../lib/validation';

export const sendContactMessage = (options?: Object): Action => ({
  type: 'SEND_CONTACT_MSG',
  payload: { options },
});

export const sendContactMessageDone = (response: Object): Action => ({
  type: 'SEND_CONTACT_MSG_DONE',
  payload: {
    response,
  },
});

export const sendContactMessageFailed = (error: Error): Action => ({
  type: 'SEND_CONTACT_MSG_FAIL',
  payload: {
    error,
  },
});

const validateEmailAndMessage = (validate, fields) => validate(fields)
  .prop('email')
    .required()
    .email()
  .prop('message')
    .required()
  .promise;

const mapFirebaseErrorToEsteValidationError = (code) => {
  const prop = {
    'auth/invalid-email': 'email',
    'auth/wrong-password': 'password',
  }[code];
  return new ValidationError(code, { prop });
};

const sendMessageWithFetcher = (email, message) => {

  const apiUrl = process.env.IS_BROWSER
    ? window.__INITIAL_STATE__.config.apiUrl
    : '/api';

  return fetch(`${apiUrl}/contactService`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      message,
      email,
    }),
  });
};

const contactEpic = (
  action$: any,
  { validate }: Deps,
) => {

  const sendMessage = (options) => {
    const { email, message } = options;
    const promise = validateEmailAndMessage(validate, { email, message })
      .then(() => sendMessageWithFetcher(email, message));
    return Observable.from(promise)
      .map((response) => sendContactMessageDone(response))
      .catch((error) => {
        if (messages[error.code]) {
          error = mapFirebaseErrorToEsteValidationError(error.code);
        }
        return Observable.of(sendContactMessageFailed(error));
      });
  };

  return action$
    .filter((action: Action) => action.type === 'SEND_CONTACT_MSG')
    .mergeMap(({ payload: { options } }) => {
      return sendMessage(options);
    });
};

export const epics = [
  contactEpic,
];

