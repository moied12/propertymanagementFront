import axios from 'axios';
import  { apiUrl } from './Repository';


class AuthRespository {
    constructor(callback) {
        this.callback = callback;
    }

    async loginRequest(payload) {
        const reponse  = await axios.post(`${apiUrl}/user/login`, 
       payload,
       { 
        "Access-Control-Allow-Origin": "http://localhost:3000/account/login",
       'Content-Type':'application/json',
      //  withCredentials: true, 
      //  credentials: 'include'
    }).then(res => {
      console.log(res.data);
        return res.data
      });
      return reponse;
    }

    async logoutRequest(){
        const reponse  = await axios.delete(`${apiUrl}/user/logout`, 
        { "Access-Control-Allow-Origin": "*"
        ,'Content-Type':'application/json'
     }).then(res => {
         return res.data
       });
       return reponse;
     }  
}

export default new AuthRespository();

