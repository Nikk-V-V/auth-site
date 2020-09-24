<template>
  <div class="home">
    <h1 v-if="message">{{message}}</h1>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    message: ''
  }),
  methods: {
    async getMe() {
      const token = this.$store.state['token']
      try {
        await this.$store.dispatch('getProfile', token)
        this.message = this.$store.state.message
      } catch (e) {
        console.warn(e)
      }
    }
  },
  mounted() {
    this.getMe()
  }
}
</script>
