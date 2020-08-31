import axios from './axios'
import { resolve } from 'path'
let instance = axios()
export default{
    get(url,params){
        return new Promise((resolve,reject)=>{
            instance.get(url,{
                params:params
            }).then(res =>{
                resolve(res.data);
            }).catch(err =>{
                reject(err.data)
            })
        })
    },
    post(url,params){
        return new Promise((resolve,reject) =>{
            instance.post(url,params)
            .then(res =>{
                resolve(res.data);
            }).catch(err =>{
                reject(err.data)
            })
        });
    }
}