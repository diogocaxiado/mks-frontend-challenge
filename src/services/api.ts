import axios from "axios";

export const http = axios.create({
   baseURL: 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1',
   headers: {
      Accept: 'application/json',
      Content: 'application/json'
   }
})