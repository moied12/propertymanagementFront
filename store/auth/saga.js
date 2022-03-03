import { all, put, takeEvery, call } from 'redux-saga/effects';
// import {notification } from 'antd';

import { login, logOut, loginSuccess, logOutSuccess, loginError, register, registerError, getUser, getUserSuccess ,getallUser,getallUserSuccess,deleteUser} from './slice';
import AuthRepository from '../../repositories/AuthRepository';
import Router from "next/router";

function* deleteUserSaga(action){
    try {
    const { payload } = action;
    const data = yield call(AuthRepository.deleteRequest, payload);
    
    console.log(data)
    if (data == 1) {
        Router.reload('/user/users');
    }
} catch (err) {
    // yield put(deleteUserSuccess(err.response.data.error))
    console.log(err)
}
}
function* loginSaga(action) {
    try {
        const { payload } = action;
        const data = yield call(AuthRepository.loginRequest, payload);
        yield put(loginSuccess());
        // modalSuccess('success');
        Router.push('/');
    } catch (err) {
        yield put(loginError(err.response.data.error))
    }
}

function* logOutSaga() {
    try {
        const data = yield call(AuthRepository.logoutRequest);
        yield put(logOutSuccess());
        // modalWarning('warning');
        Router.push('/account/login');
    } catch (err) {
        console.log(err);
    }
}

function* registerSaga(action) {
    try {
        const { payload } = action;
        const data = yield call(AuthRepository.registerRequest, payload);
        if (data == "USER REGISTERED SUCCESSFULLY") {
            Router.push('/account/login');
        }
    } catch (err) {
        yield put(registerError(err.response.data.error))
    }
}

function* getUserSaga(action) {
    try {
        const { payload } = action;
        const data = yield call(AuthRepository.getUser, payload);

        yield put(getUserSuccess(data))
    } catch (err) {
        console.log(err)
    }
}
function* getallUserSaga(action) {
    try {
        const { payload } = action;
        const data = yield call(AuthRepository.getallUser, payload);

        yield put(getallUserSuccess(data))
    } catch (err) {
        console.log(err)
    }
}

export default function* rootSaga() {
    yield all([takeEvery(login.type, loginSaga)]);
    yield all([takeEvery(logOut.type, logOutSaga)]);
    yield all([takeEvery(register.type, registerSaga)]);
    yield all([takeEvery(getUser.type, getUserSaga)]);
    yield all([takeEvery(getallUser.type, getallUserSaga)]);
    yield all([takeEvery(deleteUser.type, deleteUserSaga)]);
}
