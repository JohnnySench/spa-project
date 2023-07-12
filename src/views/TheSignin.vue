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
            v-model="isValid"
            class="pa-4 pt-6"
        >
        <v-text-field
            placeholder="Email address"
            prepend-icon="mdi-email-outline"
            variant="filled"
            type="email"
        ></v-text-field>
        <v-text-field
            class="mb-5"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            placeholder="Enter your password"
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
        :disabled="!isValid || processing"
        :loading="isLoading"
        color="deep-purple-accent-4"
        @click.prevent="signup"
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
    }),
    methods: {
        toSignup() {
            this.$router.push('/signup')
        }
    }
  }
</script>

<style scoped>

</style>