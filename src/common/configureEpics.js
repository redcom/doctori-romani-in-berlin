// @flow weak
import 'rxjs';
import { combineEpics } from 'redux-observable';
import { epics as appEpics } from './app/actions';
import { epics as authEpics } from './auth/actions';
import { epics as usersEpics } from './users/actions';
import { epics as contactEpics } from './contact/actions';
import { epics as addDoctorEpics } from './addDoctor/actions';

const epics = [
  ...appEpics,
  ...authEpics,
  ...usersEpics,
  ...contactEpics,
  ...addDoctorEpics,
];

const configureEpics = (deps: Object) => (action$, { getState }) =>
  combineEpics(...epics)(action$, { ...deps, getState });

export default configureEpics;
