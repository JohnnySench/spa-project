<template>
    <div v-if="false">
        <v-card
        class="mx-auto pa-12 pb-8 mt-16"
        elevation="8"
        max-width="448"
        rounded="lg"
        >
        <div class="text-subtitle-1 text-medium-emphasis">Email</div>

        <v-text-field
            density="compact"
            placeholder="Email address"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
            type="email"
        ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
            Пароль
        </div>
        <v-text-field
            class="mb-5"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            density="compact"
            placeholder="Enter your password"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            @click:append-inner="visible = !visible"
        ></v-text-field>

        <v-btn
            block
            class="mb-8"
            color="blue"
            size="large"
            variant="tonal"
        >
            Войти
        </v-btn>
        <div style="cursor: pointer;">
            <v-card-text 
                class="text-center pointer"
                @click="toSignup"
            >
                <a
                class="text-blue text-decoration-none"          
                >
                Зарегистрироваться <v-icon icon="mdi-chevron-right"></v-icon>
                </a>
            </v-card-text>
        </div>
        
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