import axios from 'axios';
import  { apiUrl } from './Repository';

class AuthRespository {
    constructor(callback) {
        this.callback = callback;
    }

    async loginRequest(payload) {
      
      var cookie = require('cookie-cutter');
      const reponse  = await axios.post(`${apiUrl}/user/login`, 
       payload,
       { 
        "origin": "http://localhost:3001",
       'Content-Type':'application/json',
       'Access-Control-Allow-Credentials': true,
      credentials: true,
    }).then(res => {
      var now = new Date();
      var time = now.getTime();
      var expireTime = time + 24*60*60*7*1000;
      now.setTime(expireTime);
      cookie.set('access-token', res.data,{
        expires: now.toUTCString(),path:'/'
      })
        return res.data
      });
      return reponse;
    }

    async logoutRequest(){
      var cookie = require('cookie-cutter');
      // cookie.set('access-token', "")
      var now = new Date();
      var time = now.getTime();
      var expireTime = time;
      now.setTime(expireTime);
      cookie.set('access-token',"", {expires: now.toUTCString(),path:'/'});
      return true
     }  



async registerRequest(payload) {
      const reponse  = await axios.post(`${apiUrl}/user/register`, 
     payload,
     { 
      "Access-Control-Allow-Origin": "http://localhost:3000/account/register",
     'Content-Type':'application/json',
    //  withCredentials: true, 
    //  credentials: 'include'
  }).then(res => {
      return res.data
    });
    return reponse;
  }

  async getUser(payload) {
    const reponse  = await axios.get(`${apiUrl}/user/profile/${payload}`, 
   {  
    "Access-Control-Allow-Origin": "http://localhost:3000",
   'Content-Type':'application/json',
  //  withCredentials: true, 
  //  credentials: 'include'
}).then(res => {
    return res.data
  });
  return reponse;
}
async getallUser(payload) {
  const reponse  = await axios.get(`${apiUrl}/user/all/${payload}`, 
 {  
  "Access-Control-Allow-Origin": "http://localhost:3000",
 'Content-Type':'application/json',
//  withCredentials: true, 
//  credentials: 'include'
}).then(res => {
  return res.data
});
return reponse;
}

async deleteRequest(payload) {
  const reponse = await axios.delete(`${apiUrl}/user/${payload}`,
    {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      'Content-Type': 'application/json',
      //  withCredentials: true, 
      //  credentials: 'include'
    }).then(res => {
      return res.data
    });
  return reponse;
}


}

export default new AuthRespository();

