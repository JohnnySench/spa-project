<template>
    <div>
        <v-card
            class="mx-auto mt-10"
            style="max-width: 450px;"
        >
            <v-toolbar
                color="deep-purple-accent-4"
                cards
                dark
                flat
            >
            <v-btn to="/" icon>
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-card-title class="text-h6 font-weight-regular">
                Вход
            </v-card-title>
            </v-toolbar>
        <v-form
            ref="form"
            class="pa-4 pt-6"
        >
        <v-text-field
            focused
            v-model="email"
            label="Введите email"
            prepend-icon="mdi-email-outline"
            variant="filled"
            type="email"
        ></v-text-field>
        <v-text-field
            v-model="password"
            class="mb-5"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            label="Введите пароль"
            prepend-icon="mdi-lock-outline"
            variant="filled"
            @click:append-inner="visible = !visible"
        ></v-text-field>
        </v-form>
        <v-card-actions>
      <v-btn
        variant="text"
        @click="clearForm"
      >
        Очистить
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="processing"
        color="deep-purple-accent-4"
        @click.prevent="signin"
      >
        Войти
      </v-btn>
    </v-card-actions>
       
        
        </v-card>
  </div>
  
</template>

<script>
  export default {
    data: () => ({
      visible: false,
      email: undefined,
      password: undefined,
    }),
    methods: {
        toSignup() {
            this.$router.push('/signup')
        },
        clearForm() {
            this.$refs.form.reset()
        },
        signin() {
            this.$store.dispatch('SIGNIN', {email: this.email, password: this.password})
        }
    },
    computed: {
        error() {
          return this.$store.getters.getError
        },
        processing() {
          return this.$store.getters.getProcessing
        },
        isUserAuth() {
          return this.$store.getters.getUserAuth
        }
    },
    watch: {
      isUserAuth(value) {
        if (value) this.$router.push('/books')
      }
    }
  }
</script>

<style scoped>

</style>