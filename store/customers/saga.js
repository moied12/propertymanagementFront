import { all, put, takeEvery, call } from 'redux-saga/effects';
import {  register, registerError, getUser, getUserSuccess ,getallUser,getallUserSuccess,deleteUser,deleteUserSuccess} from './slice';
import CustomerRepository from '../../repositories/CustomerRepository';
import Router from "next/router";


function* deleteUserSaga(action){
        try {
        const { payload } = action;
        const data = yield call(CustomerRepository.deleteRequest, payload);
        
        console.log(data)
        if (data == 1) {
            Router.reload('/customer/customers');
        }
    } catch (err) {
        // yield put(deleteUserSuccess(err.response.data.error))
        console.log(err)
    }
}

function* registerSaga(action) {
    try {
        const { payload } = action;
        const data = yield call(CustomerRepository.registerRequest, payload);
        if (data == "Customer REGISTERED SUCCESSFULLY") {
            registerError("false")
            Router.push('/customer/customers');
        }
    } catch (err) {
        yield put(registerError(err.response.data.error))
    }
}

function* getUserSaga(action) {
    try {
        const { payload } = action;
        const data = yield call(CustomerRepository.getUser, payload);
        yield put(getUserSuccess(data))
    } catch (err) {
        console.log(err)
    }
}
function* getallUserSaga(action) {
    try {
        const { payload } = action;
        const data = yield call(CustomerRepository.getallUser, payload);

        yield put(getallUserSuccess(data))
    } catch (err) {
        console.log(err)
    }
}

export default function* rootSaga() {
    yield all([takeEvery(register.type, registerSaga)]);
    yield all([takeEvery(getUser.type, getUserSaga)]);
    yield all([takeEvery(getallUser.type, getallUserSaga)]);
    yield all([takeEvery(deleteUser.type, deleteUserSaga)]);
}
