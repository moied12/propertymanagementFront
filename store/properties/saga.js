import { all, put, takeEvery,call } from 'redux-saga/effects';
import {getAllCommercial,getAllCommercialSuccess,getAllResidential,getAllResidentialSuccess,getCommercialbyid,
    getCommercialbyidSuccess,getCommercialbyuser,getCommercialbyuserSuccess,getResidentialbyid
    ,getResidentialbyuserSuccess,getResidentialbyuser,getResidentialbyidSuccess,addResidential,addCommercial,
    addCommercialStart,addCommercialSuccess,editCommercial,editResidential} from './slice';
import PropertyRepository from '../../repositories/PropertyRepository';
import Router from "next/router";

// function* getResidentialbyuserSaga(action) {
//     try {
//         const {payload} = action;
//         const data = yield call(PropertyRepository.loginRequest, payload);
//         yield put(loginSuccess());
//         // modalSuccess('success');
//         Router.push('/');
//     } catch (err) {
//         yield put(loginError(err.response.data.error))
//     }
// }

// function* getCommercialbyuserSaga(action) {
//     try {
//         const data = yield call(AuthRepository.logoutRequest);
//         yield put(logOutSuccess());
//         // modalWarning('warning');
//         Router.push('/account/login');
//     } catch (err) {
//         console.log(err);
//     }
// }


// function* getResidentialbyidSaga(action) {
//     try {
//         const {payload} = action;
//         const data = yield call(PropertyRepository.loginRequest, payload);
//         yield put(loginSuccess());
//         // modalSuccess('success');
//         Router.push('/');
//     } catch (err) {
//         yield put(loginError(err.response.data.error))
//     }
// }

// function* getCommercialbyidSaga(action) {
//     try {
//         const data = yield call(AuthRepository.logoutRequest);
//         yield put(logOutSuccess());
//         // modalWarning('warning');
//         Router.push('/account/login');
//     } catch (err) {
//         console.log(err);
//     }
// }
function* addResidentialSaga(action) {
    try {
        const {payload} = action;
        const data = yield call(PropertyRepository.addResidential, payload);
    } catch (err) {
        yield console.log(err)
    }
}
function* addCommercialSaga(action) {
    try {
        const {payload} = action;
        const data = yield call(PropertyRepository.editCommercial, payload);
        Router.push('/property/commercial');
    } catch (err) {
        yield console.log(err)
    }
}

function* editResidentialSaga(action){
    try {
        const {payload} = action;
        const data = yield call(PropertyRepository.editResidential, payload);
        Router.push('/property/residential');
    } catch (err) {
        yield console.log(err)
    }
}
function* editCommercialSaga(action){}

function* getAllResidentialSaga() {
    try {
        const data = yield call(PropertyRepository.getallresidential);
        yield put(getAllResidentialSuccess(data));
    } catch (err) {
        console.log(err)
    }
}

function* getAllCommercialSaga() {
    try {
        const data = yield call(PropertyRepository.getallcommercial);
        
        yield put(getAllCommercialSuccess(data));
    } catch (err) {
        console.log(err)
    }
}


export default function* rootSaga() {
    yield all([takeEvery(getAllCommercial.type,getAllCommercialSaga)]);
    yield all([takeEvery(getAllResidential.type,getAllResidentialSaga)]);
    yield all([takeEvery(addResidential.type,addResidentialSaga)]);
    yield all([takeEvery(addCommercial.type,addCommercialSaga)]);
    yield all([takeEvery(editResidential.type,editResidentialSaga)]);
    yield all([takeEvery(editCommercial.type,editCommercialSaga)]);
    // yield all([takeEvery()]);
}
