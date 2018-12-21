import axios from 'axios';
// import Toast from 'muse-ui-toast';
import { Promise } from 'es6-promise';

const timeout = 5000;

const request = (method, url, params) => axios({
  method: method,
  url: url,
  params: params,
  timeout: timeout
}).then((res) => {
  // if (res.code === 0) {
    return res.data;
  // } else {
  //   Toast.success('请求错误，请稍后再试');
  //   Promise.reject(res);
  // }
}).catch((err) => {
  if (err.status === 401) {
    Toast.error('您无权访问该页面');
  } else if (err.status === 403) {
    Toast.error('禁止访问');
  } else if (err.status === 404) {
    Toast.error('您访问的页面不存在了');
  } else if (err.status === 500) {
    Toast.error('服务器出了一点问题，请联系管理员');
  }
  Promise.reject(err);
});

export default {
  get(url, params) {
    return request('get', url, params);
  },
  post(url, params) {
    return request('post', url, params);
  },
}

