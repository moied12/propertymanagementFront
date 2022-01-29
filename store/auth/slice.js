import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
name:  'auth',
initialState:{
    isLoggedIn: false,
    error:'false',
},
reducers : {
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
    
}

});

export const {login,logOut,logOutSuccess,loginSuccess,loginError,loginErrorReset} = authSlice.actions;
export default authSlice.reducer;

