import { Action } from '../typings'
import { FormState } from '../typings/formState'

export const initialState: FormState = {
  firstName: '',
  lastName: '',
  age: undefined,
  document: '',
  contact: '',
  email: '',
  city: '',
  state: '',
}

function formReducer(state: FormState, action: FormAction) {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value }
    case 'RESET_FORM':
      return initialState
    default:
      return state
  }
}
