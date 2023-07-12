<template>
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
        Регистрация
      </v-card-title>
    </v-toolbar>
    <v-form
      ref="form"
      v-model="isValid"
      class="pa-4 pt-6"
    >
    <v-alert
      v-model="error"
      class="mb-4"
      density="compact"
      type="warning"
      title="Ошибка"
      :text="error"
    >
    </v-alert>
      <v-text-field
        prepend-icon="mdi-lock-outline"
        v-model="password"
        :rules="[rules.password, rules.length(6)]"
        variant="filled"
        color="deep-purple"
        counter="6"
        label="Пароль"
        style="min-height: 96px"
        type="password"
      ></v-text-field>
      <v-text-field
        prepend-icon="mdi-cellphone"
        v-model="phone"
        variant="filled"
        color="deep-purple"
        label="Номер телефона"
      ></v-text-field>
      <v-text-field
        prepend-icon="mdi-email-outline"
        v-model="email"
        :rules="[rules.email]"
        variant="filled"
        color="deep-purple"
        label="Email"
        type="email"
      ></v-text-field>
      <v-checkbox
        v-model="agreement"
        :rules="[rules.required]"
        color="deep-purple"
      >
        <template v-slot:label>
          I agree to the&nbsp;
          <a
            href="#"
            @click.stop.prevent="dialog = true"
          >Terms of Service</a>
          &nbsp;and&nbsp;
          <a
            href="#"
            @click.stop.prevent="dialog = true"
          >Privacy Policy</a>*
        </template>
      </v-checkbox>
    </v-form>
    <v-divider></v-divider>
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
        color="deep-purple-accent-4"
        @click.prevent="signup"
      >
        Зарегистрироваться
      </v-btn>
    </v-card-actions>
    <v-dialog
      v-model="dialog"
      max-width="400"
      persistent
    >
      <v-card>
        <v-card-title class="text-h5 bg-grey-lighten-3">
          Правила
        </v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            variant="text"
            @click="agreement = false, dialog = false"
          >
            Нет
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="deep-purple"
            variant="tonal"
            @click="agreement = true, dialog = false"
          >
            Да
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      agreement: false,
      dialog: false,
      email: undefined,
      isValid: false,
      password: undefined,
      phone: undefined,
      rules: {
        email: v => !!(v || '').match(/@/) || 'Укажите правильный email',
        length: len => v => (v || '').length >= len || `Слишком короткий ${len}`,
        password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
          'Пароль должен содержать заглавную букву, цифру и специальный символ.',
        required: v => !!v || 'Это поле обязательно',
      },
    }),
    methods: {
        clearForm() {
            this.$refs.form.reset()
        },
        signup() {
            this.$store.dispatch('SIGNUP', {email: this.email, password: this.password})
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