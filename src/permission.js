import router from './router'
import store from './store'
import { getLocalStorage } from '@/utils/localStorage'
import api from './api/apiList'

const whiteList=['/login','/zhuce','/']
router.beforeEach((to, from, next) => {
    if(getLocalStorage('Token')){
        if(to.path==='/login'){
            next({path:'/person'})
        }else{
            api.user.userinfo().then(res =>{
                console.log(res.data)
                let user = res.data.user;
                store.commit("user/SET_USERNAME",user.user_name);
                store.commit("user/SET_USERID",user.user_id);
                next()
            }).catch((err)=>{
                console.log(err)
                store.dispatch('user/logout').then(()=>{
                    next({path:'/'})
                })
            })
        }
    }else{
        if(whiteList.indexOf(to.path) !==-1){
            next()
        }else{
            next('/login')

        }
    }
        
})
