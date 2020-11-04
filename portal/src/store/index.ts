import Vue from 'vue'
import Vuex from 'vuex'
import VuexEasyFirestore from 'vuex-easy-firestore'

// import Firebase config
import { Firebase, initFirebase } from '@/config/firebase.ts'

// import Vuex modules
import { organization } from './modules/organization'

// import state
import { OrganizationState } from './modules/organization/state'

Vue.use(Vuex)

export interface RootState {
  organization: OrganizationState;
}

// Vue.use(Vuex)

const easyFirestore = VuexEasyFirestore(
  [
    organization
  ],
  {
    logging: true,
    FirebaseDependency: Firebase
  }
)
  
// include as PLUGIN in your vuex store
const storeData = {
  plugins: [easyFirestore],
}
  
// initialise Vuex
const store = new Vuex.Store(storeData)
  
// initFirebase
initFirebase()
  .catch(error => {
    console.log(error)
    // take user to a page stating an error occurred
    // (might be a connection error, or the app is open in another tab)
  })

export default store