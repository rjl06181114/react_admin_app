import axios from 'axios';
import {message} from 'antd';
export default function ajax(url, data={}, type) {
    let promise;
    //返回一个新promise对象，在内部用catch统一处理错误返回结果。
    return new Promise((resolve,reject)=>{
        if (type === 'GET') {
            promise =  axios.get(url, {
                params: data
            })
        }else{
           promise =  axios.post(url,data);
       } 
       promise.then((res)=>{
           resolve(res)
       }).catch((err)=>{
           message.error(err.message);
       })
    })
   

};