import { createStore, combineReducers } from 'redux'
import contacts from './contacts'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    form: formReducer,
    contacts
})