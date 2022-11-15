//axios进行二次封装
import axios from 'axios';
import nProgress from 'nprogress';
//引入进入条的样式
import "nprogress/nprogress.css";
import store from '@/store';
import { config } from 'vue/types/umd';
const request = axios.create({
    baseURL:"/api",
    timeout:5000
});
//请求拦截器
request.interceptors.request.use((config)=>{
    //开启进度条
    if(store.state.detail.uuid_token){
        config.headers.userTempId = store.state.detail.uuid_token;
    };
    if(store.state.user.token){
        config.headers.tokrn = store.state.headers.token;
    }
    nProgress.start();
    return config;
})
//响应拦截器
request.interceptors.response.use((res)=>{
    //进度条结束
    nProgress.done();
    return res.data;
},(error)=>{
    return Promise.reject(new Error('failed'));
})
export default request;