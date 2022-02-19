import { all, put, takeEvery,call } from 'redux-saga/effects';
import {getCity,getCitySuccess,getRent,getRentSuccess,getStatus,getStatusSuccess,getType1,getTypeSuccess } from './slice';
import rtscRepository from '../../repositories/rtscRepository';


function* getCitySaga() {
    try {
        const data = yield call(rtscRepository.getcity);
        data.map(function(item) { 
            delete item.createdAt;  
            delete item.updatedAt; 
            item.value = item.id;
            delete item.id;
            item.label = item.city;
            delete item.city;
            return item; 
        });
        yield put(getCitySuccess(data));
    } catch (err) {
        console.log(err)
    }
}
function* getRentSaga() {
    try {
        const data = yield call(rtscRepository.getrent);
        data.map(function(item) { 
            delete item.createdAt;  
            delete item.updatedAt; 
            item.value = item.id;
            delete item.id;
            item.label = item.duration;
            delete item.duration;
            return item; 
        });
        yield put(getRentSuccess(data));
    } catch (err) {
        console.log(err)
    }
}
function* getstatusSaga() {
    try {
        const data = yield call(rtscRepository.getstatus);
        data.map(function(item) { 
            delete item.createdAt;  
            delete item.updatedAt; 
            item.temp = item.value;
            delete item.value;
            item.value = item.id;
            delete item.id;
            item.label = item.temp;
            delete item.temp;
            return item; 
        });
        yield put(getStatusSuccess(data));
    } catch (err) {
        console.log(err)
    }
}
function* getTypeSaga() {
    try {
        const data = yield call(rtscRepository.gettype);
        data.map(function(item) { 
            delete item.createdAt;  
            delete item.updatedAt; 
            item.value = item.id;
            delete item.id;
            item.label = item.type;
            delete item.type;
            return item; 
        });
        yield put(getTypeSuccess(data));
    } catch (err) {
        console.log(err)
    }
}



export default function* rootSaga() {
    yield all([takeEvery(getCity.type,getCitySaga)]);
    yield all([takeEvery(getRent.type,getRentSaga)]);
    yield all([takeEvery(getType1.type,getTypeSaga)]);
    yield all([takeEvery(getStatus.type,getstatusSaga)]);
}
