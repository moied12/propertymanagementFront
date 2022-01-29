import { combineReducers } from 'redux'

import count from './count/countSlice'
import auth from './auth/slice'

const reducers = combineReducers({ 
  count,auth
})

export default reducers;