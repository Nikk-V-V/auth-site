<template>
  <form @submit.prevent="onSubmit">
    <div class="fields">
      <div class="field">
        <input type="email" v-model="email" placeholder="email">
      </div>
      <div class="field">
        <input type="password" v-model="password" placeholder="пароль">
      </div>
    </div>
    <button type="submit">
      Увійти
    </button>
    <p class="small">
      <router-link to="/register">Реєстрація</router-link>
    </p>
  </form>
</template>

<script>
  export default {
    name: "Login",
    data: () => ({
      email: '',
      password: ''
    }),
    methods: {
      async onSubmit() {
        const formData = {email: this.email, password: this.password}
        try {
          await this.$store.dispatch('login', formData)
          await this.$router.push('/')
        } catch (e) {
          console.warn(e)
        }
      }
    }
  }
</script>

<style scoped>

</style>