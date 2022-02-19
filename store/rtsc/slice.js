import {createSlice, getType} from '@reduxjs/toolkit'

const rtscSlice = createSlice({
name:  'rtsc',
initialState:{
    rent : [],
    type:[],
    status:[],
    city:[],
},
reducers : {
getRent(){},
getRentSuccess:(state,action)=>({
    ...state,
    rent:action.payload
}),
getType1(){},
getTypeSuccess:(state,action)=>({
    ...state,
    type:action.payload
}),
getStatus(){},
getStatusSuccess:(state,action)=>({
    ...state,
    status:action.payload
}),
getCity(){},
getCitySuccess:(state,action)=>({
    ...state,
    city:action.payload
}),
}


});

export const {getCity,getCitySuccess,getRent,getRentSuccess,getStatus,getStatusSuccess,getType1,getTypeSuccess} = rtscSlice.actions;
export default rtscSlice.reducer;

