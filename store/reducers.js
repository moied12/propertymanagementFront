import { combineReducers } from 'redux'

import auth from './auth/slice';
import property from "./properties/slice";
import rtsc from "./rtsc/slice"

const reducers = combineReducers({ 
 auth,
 property,
rtsc
})

export default reducers;