import store from 'store';
const USER_KEY = 'user_key';
export default{
//使用store.js可以实现localstorage的持久化兼容存储
  saveUser(user){
     store.set(USER_KEY,user);
  },
  getUser(USER_KEY){
      return store.get(USER_KEY);
  },
  removeUser(USER_KEY){
      store.remove(USER_KEY);
  }
}