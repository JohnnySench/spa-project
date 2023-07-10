import { createStore } from 'vuex'
import user from './user'
import general from './general'

export default createStore({
  
  modules: {
    user,
    general
  }
})
