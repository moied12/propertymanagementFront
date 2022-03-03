import axios from 'axios';
import { apiUrl } from './Repository';

class CustomerRepository {
  constructor(callback) {
    this.callback = callback;
  }
  async registerRequest(payload) {
    const reponse = await axios.post(`${apiUrl}/customer/register`,
      payload,
      {
        "Access-Control-Allow-Origin": "http://localhost:3000/customer/addcustomer",
        'Content-Type': 'application/json',
        //  withCredentials: true, 
        //  credentials: 'include'
      }).then(res => {
        return res.data
      });
    return reponse;
  }

  async getUser(payload) {
    const reponse = await axios.get(`${apiUrl}/customer/profile/${payload}`,
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


  async getallUser(payload) {
    const reponse = await axios.get(`${apiUrl}/customer/all/${payload}`,
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


  async deleteRequest(payload) {
    const reponse = await axios.delete(`${apiUrl}/customer/${payload}`,
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

export default new CustomerRepository();

