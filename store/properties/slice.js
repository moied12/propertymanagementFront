import {createSlice} from '@reduxjs/toolkit'

const propertySlice = createSlice({
name:  'property',
initialState:{
    residential: null,
    commercial: null,
    commercialLoading:true,
    residentialLoading:true,
    propertyLoading:true,
    error:false,
    property:null,
    uploading:false
},
reducers : {



addResidential(){},
addResidentialSuccess:(state,action)=>({
    ...state,
    uploading:false
}),
addResidentialStart:(state,action)=>({
    ...state,
    uploading:true
}),


addCommercial(){},
addCommercialSuccess:(state,action)=>({
    ...state,
    uploading:false
}),
addCommercialStart:(state,action)=>({
    ...state,
    uploading:true
}),


editResidential(){},
editCommercial(){},



getResidentialbyuser(){},
getCommercialbyuser(){},
getResidentialbyuserSuccess:(state,action)=>({
        ...state,
        residential:action.payload,propertyLoading:false
}),
getCommercialbyuserSuccess:(state,action)=>({
    ...state,
    commercial:action.payload,propertyLoading:false
}),







getResidentialbyid(){},
getCommercialbyid(){},
getResidentialbyidSuccess:(state,action)=>({
    ...state,
    property:action.payload,propertyLoading:false
}),
getCommercialbyidSuccess:(state,action)=>({
...state,
property:action.payload,propertyLoading:false
}),






getAllResidential(){},
getAllCommercial(){},
getAllResidentialSuccess:(state,action)=>({
    ...state,
    residential:action.payload,residentialLoading:false
}),
getAllCommercialSuccess:(state,action)=>({
    ...state,
    commercial:action.payload,commercialLoading:false
}),





}
});

export const {getAllCommercial,getAllCommercialSuccess,getAllResidential,getAllResidentialSuccess,
            getCommercialbyid,getCommercialbyidSuccess,getCommercialbyuser,
            getCommercialbyuserSuccess,getResidentialbyid,getResidentialbyuserSuccess,
            getResidentialbyuser,getResidentialbyidSuccess,addResidential,addResidentialStart,addResidentialSuccess,
            addCommercial,addCommercialStart,addCommercialSuccess,editCommercial,editResidential} = propertySlice.actions;
export default propertySlice.reducer;

