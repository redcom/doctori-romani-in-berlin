// @flow
import type { Action, AddDoctorState } from '../types';

const initialState = {
  formDisabled: false,
  formSuccess: false,
  error: null,
};

const reducer = (
  state: AddDoctorState = initialState,
  action: Action,
): AddDoctorState => {
  switch (action.type) {
    case 'ADD_DOCTOR': {
      return { ...state, formDisabled: true };
    }

    case 'ADD_DOCTOR_DONE': {
      return { ...state, formDisabled: false, error: null, formSuccess: true };
    }

    case 'ADD_DOCTOR_FAIL': {
      return { ...state, formDisabled: false, error: action.payload.error };
    }

    default:
      return state;
  }
};

export default reducer;

