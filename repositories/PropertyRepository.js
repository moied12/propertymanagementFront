import axios from 'axios';
import  { apiUrl } from './Repository';

class PropertyRepository {
    constructor(callback) {
        this.callback = callback;
    }
    async getresidentialbyuserid(payload){
      const data = await axios.get(`${apiUrl}/residential/byuser/${payload}`)
      .then(response => {
          return response.data;
      })
      .catch(error => ({ error: JSON.stringify(error) }));
  return data;
    }
    async getcommercialbyuserid(payload){
      const data = await axios.get(`${apiUrl}/commercial/byuser/${payload}`)
      .then(response => {
          return response.data;
      })
      .catch(error => ({ error: JSON.stringify(error) }));
  return data;
    }
    
    async getresidentialbyid(payload){
      const data = await axios.get(`${apiUrl}/residential/${payload}`)
      .then(response => {
          return response.data;
      })
      .catch(error => ({ error: JSON.stringify(error) }));
  return data;
    }
    async getcommercialbyid(payload){
      const data = await axios.get(`${apiUrl}/commercial/${payload}`)
      .then(response => {
          return response.data;
      })
      .catch(error => ({ error: JSON.stringify(error) }));
  return data;
    }

    
    async getallresidential(){
      const data = await axios.get(`${apiUrl}/residential/all`)
      .then(response => {
          return response.data;
      })
      .catch(error => ({ error: JSON.stringify(error) }));
  return data;
    }
    async getallcommercial(){
      const data = await axios.get(`${apiUrl}/commercial/all`)
      .then(response => {
          return response.data;
      })
      .catch(error => ({ error: JSON.stringify(error) }));
  return data;                                                                                                                                                                                                       
    }

    async addResidential(payload){
      const reponse  = await axios.post(`${apiUrl}/residential/new`, 
       payload,
       { 
        "origin": "http://localhost:3001",
       'Content-Type':'application/json',
       'Access-Control-Allow-Credentials': true,
      credentials: true,
    }).then(res => {
        return res.data
      });
      return reponse;
    }
  
    async addCommercial(payload){
      const reponse  = await axios.post(`${apiUrl}/commercial/new`, 
       payload,
       { 
        "origin": "http://localhost:3001",
       'Content-Type':'application/json',
       'Access-Control-Allow-Credentials': true,
      credentials: true,
    }).then(res => {
        return res.data
      });
      return reponse;
    }

    async editResidential(payload){
      console.log(payload);
      const reponse  = await axios.put(`${apiUrl}/residential/${payload.id}`, 
       payload,
       { 
        "origin": "http://localhost:3001",
       'Content-Type':'application/json',
       'Access-Control-Allow-Credentials': true,
      credentials: true,
    }).then(res => {
        return res.data
      });
      return reponse;
    }
    async editCommercial(payload){
      console.log(payload);
      const reponse  = await axios.put(`${apiUrl}/commercial/${payload.id}`, 
       payload,
       { 
        "origin": "http://localhost:3001",
       'Content-Type':'application/json',
       'Access-Control-Allow-Credentials': true,
      credentials: true,
    }).then(res => {
        return res.data
      });
      return reponse;
    
}
}


export default new PropertyRepository();

