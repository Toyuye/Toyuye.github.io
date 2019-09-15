import axios from 'axios';
import qs from 'qs';

const service: any = axios.create({
  baseURL:process.env.VUE_APP_HTTP_ROOT,
  timeout: 10000
});
// request
service.interceptors.request.use((config: any) =>{
    if(config.method === "form") {
      config.method = 'post';
      config.data = qs.stringify(config.data);
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    if(config.method === 'post') {
      config.data = qs.stringify(config.data)
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    if(config.method === 'get') {
      config.params ? config.params._ = new Date().getTime() : config.params = {_: new Date().getTime()}
    }
    return config
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
// response
service.interceptors.response.use(
  (config: any) => {
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
export default service;
