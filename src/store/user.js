import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export default {
    state: {
       user: {
        isAuth: false,
        uid: null
       }
    },
    getters: {
        getUserAuth: (state) => state.user.isAuth
    },
    mutations: {
        SET_USER(state, payload) {
            state.user.isAuth = true;
            state.user.uid = payload;
        }
    },
    actions: {
        SIGNUP({commit}, payload) {
            commit('SET_PROCESSING', true)
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, payload.email, payload.password)
            .then((userCredential) => {
                commit('SET_PROCESSING', false)
                commit('SET_USER', userCredential.user.uid)
                console.log(userCredential.user.uid);
            })
            .catch((error) => {
                commit('SET_PROCESSING', false)
                commit('SET_ERROR', error.message)
                console.log(error.message);
            });
        },
        SIGNIN({commit}, payload) {
            commit('SET_PROCESSING', true)
            const auth = getAuth();
            signInWithEmailAndPassword(auth, payload.email, payload.password)
            .then((userCredential) => {
                commit('SET_PROCESSING', false)
                commit('SET_USER', userCredential.user.uid)
                console.log(userCredential.user.uid);
            })
            .catch((error) => {
                commit('SET_PROCESSING', false)
                commit('SET_ERROR', error.message)
                console.log(error.message);
            });
        }
    }
}