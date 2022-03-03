import {createSlice} from '@reduxjs/toolkit'

const customerSlice = createSlice({
name:  'customer',
initialState:{
    isLoggedIn: false,
    error:'false',
    user:[],
    alluser:[]
},
reducers : {
register(){},
registerError: (state, action) => ({
    ...state,
    ...{ error: action.payload },}),
registerErrorReset: (state, action) => ({
    ...state,
    ...{ error: 'false' },}),

getUser(){},
getUserSuccess:(state,action)=>({
    ...state,
    ...{ user: action.payload},
}),

deleteUser(){},
deleteUserSuccess:(state,action)=>({
    ...state,
    ...{ alluser: action.payload},
}),

getallUser(){},
getallUserSuccess:(state,action)=>({
    ...state,
    ...{ alluser: action.payload},
}),
}


});

export const {register,registerError,registerErrorReset,
getUser,getUserSuccess,getallUser,getallUserSuccess,
deleteUser,deleteUserSuccess} = customerSlice.actions;
export default customerSlice.reducer;

