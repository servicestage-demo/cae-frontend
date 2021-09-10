// 引入
import axios from "axios"
// 环境
axios.defaults.baseURL ='http://localhost:9090/';   //  要请求的后台地址
// 请求超时
axios.defaults.timeout =30000;
//  post 请求头
axios.defaults.headers.post['Content-Type'] ='application/json';
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params){
    return new Promise((resolve, reject) =>{
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params,).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    });
}
/**
 * put方法，对应put请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function put(url, params) {
    return new Promise((resolve, reject) => {
        axios.put(url, params,)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
/**
 * $delete，对应delete请求
 */
export function $delete(url, params){
    return new Promise((resolve, reject) =>{
        axios.delete(url, {
            data: params
        })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            })
    });
}