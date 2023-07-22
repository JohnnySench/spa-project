<template>
  <v-app>
    <TheHeader/>
    <RouterView></RouterView>
    <TheFooter/>
  </v-app>
  
</template>

<script>
  import TheFooter from '@/components/TheFooter.vue';
  import TheHeader from '@/components/TheHeader.vue';
  import { getAuth, onAuthStateChanged } from "firebase/auth";

  export default {
    components: {
      TheHeader,
      TheFooter
    },
    created() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
    }
    
  }

</script>

