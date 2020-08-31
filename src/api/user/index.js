import api from '../index'
import urls from './urls'
export default {
  userinfo () {
    // return出去了一个promise
    return api.get(urls.userinfo)
  },
  postlogin (params) {
    // return出去了一个promise
      return api.post(urls.postlogin,params)
  },
  addUserInfo (params) {
    // return出去了一个promise
      return api.post(urls.addUserInfo,params)
  },
  addGoodsInfo (params) {
    
      return api.post(urls.addGoodsInfo,params)
  },
  getGoodsInfo (params) {
    
    return api.post(urls.getGoodsInfo,params)
},
  getUserGoodsinfo(params) {
    
    return api.post(urls.getUserGoodsinfo,params)
}
}
