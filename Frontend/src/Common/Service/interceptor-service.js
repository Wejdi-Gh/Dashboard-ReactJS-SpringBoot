import axios from 'axios';

export const http = axios.create ({
    baseURL: process.env.VUE_APP_ROOT_API,
    timeout: 1000,
    headers: {'Content-Type': 'application/json'},
  });



http.interceptors.request.use(config => {
    
let token = localStorage.getItem('access_token');


 config.headers.authorization = token ?  `Bearer ${token}` : ''; 


return config;
},error => {
// Do something with request error
return Promise.reject(error);
});