import { removeLocalStorage } from '@/utils/localStorage'

const user ={
    namespaced: true,
    state:{
        username:'',
        userid:'',
        token:''

    },
    getters: {
        token:state => state.token,
        username:state => state.username,
        userid:state =>state.userid
    },
    mutations:{
        SET_TOKEN:(state,token)=>{
            state.token= token
        },
        SET_USERNAME:(state,username)=>{
            state.username=username
        },
        SET_USERID:(state,userid)=>{
            state.userid=userid
        }, 
    },
    actions:{
        //注销
        logout(){
            return new Promise((resolve,reject) => {
                removeLocalStorage('Token')
                resolve()
            })
        },
    }

} 

export default user;