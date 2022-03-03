import { combineReducers } from 'redux'

import auth from './auth/slice';
import property from "./properties/slice";
import rtsc from "./rtsc/slice"
import customer from "./customers/slice"

const reducers = combineReducers({ 
 auth,
 property,
rtsc,
customer
})

export default reducers;