import axios from 'axios';
import  { apiUrl } from './Repository';

class rtscRepository {
    constructor(callback) {
        this.callback = callback;
    }

    
    async getcity(){
      const data = await axios.get(`${apiUrl}/city/all`)
      .then(response => {
          return response.data;
      })
      .catch(error => ({ error: JSON.stringify(error) }));
  return data;
    }
    async getrent(){
        const data = await axios.get(`${apiUrl}/rent/all`)
        .then(response => {
            return response.data;
        })
        .catch(error => ({ error: JSON.stringify(error) }));
    return data;
      }
      async getstatus(){
        const data = await axios.get(`${apiUrl}/status/all`)
        .then(response => {
            return response.data;
        })
        .catch(error => ({ error: JSON.stringify(error) }));
    return data;
      }
      async gettype(){
        const data = await axios.get(`${apiUrl}/type/all`)
        .then(response => {
            return response.data;
        })
        .catch(error => ({ error: JSON.stringify(error) }));
    return data;
      }


}

export default new rtscRepository();
