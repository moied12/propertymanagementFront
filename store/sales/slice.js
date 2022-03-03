import {createSlice, getType} from '@reduxjs/toolkit'

const rentSlice = createSlice({
name:  'rent',
initialState:{
    city:[],
},
reducers : {
getCity(){},
getCitySuccess:(state,action)=>({
    ...state,
    city:action.payload
}),
}


});

export const {getCity,getCitySuccess} = rentSlice.actions;
export default rentSlice.reducer;

