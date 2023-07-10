import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
    state: {
       user: {
        isAuth: false,
        uid: null
       }
    },
    getters: {
    },
    mutations: {
    },
    actions: {
        SIGNUP({commit}, payload) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, payload.email, payload.password)
            .then((userCredential) => {
                console.log(userCredential);
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                console.log(error.message);
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
        }
    }
}