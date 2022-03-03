import { all, put, takeEvery,call } from 'redux-saga/effects';
import {getCity,getCitySuccess} from './slice';
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



export default function* rootSaga() {
    yield all([takeEvery(getCity.type,getCitySaga)]);
}
 