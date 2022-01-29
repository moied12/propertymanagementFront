import { all, put, takeEvery,call } from 'redux-saga/effects';
// import {notification } from 'antd';

import { login,logOut, loginSuccess, logOutSuccess, loginError } from './slice';
import AuthRepository from '../../repositories/AuthRepository';
import Router from "next/router";

// const modalSuccess = type => {
//     notification[type]({
//         message: 'Wellcome back',
//         description: 'You are login successful!',
//     });
// };

// const modalWarning = type => {
//     notification[type]({
//         message: 'Good bye!',
//         description: 'Your account has been logged out!',
//     });
// };

function* loginSaga(action) {
    try {
        const {payload} = action;
        const data = yield call(AuthRepository.loginRequest, payload);
        if (data=="LOGGED IN"){
            yield put(loginSuccess());
            // modalSuccess('success');
            Router.push('/');
        }
    } catch (err) {
        yield put(loginError(err.response.data.error))
    }
}

function* logOutSaga() {
    try {
        
        const data = yield call(AuthRepository.logoutRequest);
        yield put(logOutSuccess());
        // modalWarning('warning');
    } catch (err) {
        console.log(err);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(login.type, loginSaga)]);
    yield all([takeEvery(logOut.type, logOutSaga)]);
}
