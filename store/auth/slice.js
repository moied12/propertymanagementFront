import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
name:  'auth',
initialState:{
    isLoggedIn: false,
    error:'false',
    user:null,
},
reducers : {
register(){},
registerError: (state, action) => ({
    ...state,
    ...{ error: action.payload },}),
registerErrorReset: (state, action) => ({
    ...state,
    ...{ error: 'false' },}),
login(){},
logOut(){},
logOutSuccess:(state,action)=>({
        ...state,
        ...{ isLoggedIn: false },
    }),
loginSuccess:(state,action)=>({
        ...state,
        ...{ isLoggedIn: true},
        ...{ error:'false'},
    }),
loginError: (state, action) => ({
    ...state,
    ...{ error: action.payload },}),
loginErrorReset: (state, action) => ({
    ...state,
    ...{ error: 'false' },}),


getUser(){},
getUserSuccess:(state,action)=>({
    ...state,
    ...{ user: action.payload},
}),
}


});

export const {register,login,logOut,logOutSuccess,loginSuccess,loginError,loginErrorReset,registerError,registerErrorReset,
getUser,getUserSuccess} = authSlice.actions;
export default authSlice.reducer;

