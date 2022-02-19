import { all } from 'redux-saga/effects';

import AuthSaga from './auth/saga';
import PropertySaga from './properties/saga'
import rtscSaga from "./rtsc/saga"

export default function* rootSaga() {
    yield all([
        AuthSaga(),
        PropertySaga(),
        rtscSaga()
    ]);
}
