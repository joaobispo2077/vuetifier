<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <section class="form-container">
      <input type="text" v-model="email"/>
      <input type="text" v-model="password" />
      <button @click="login">Login</button>
    </section>
    <section>
        {{ email }} - {{ password }}
      <h2>Login Info</h2>
        {{ token }}
    </section>
  </div>
</template>

<script>
import cognito from './services/cognito';

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    email: null,
    password: null,
    token: null
  }),
  methods: {
    async login() {
        this.token = await cognito.authenticateUser(this.email, this.password);
        console.log(this.token);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
