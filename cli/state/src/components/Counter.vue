<template>
  <div class="hello">
    <h1>Counter: {{ counter }}</h1>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <p>{{inputed}}</p>
    <input type="text" :value="inputed" @input="updateMessage" />

  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  computed: ({
 ...mapState({
   counter: state => state.counter,
   inputed: state => state.inputed
 })
  }),
  methods: {
   ...mapMutations([
     'increment'
   ]),
   ...mapActions([
    'decrement'
   ]),
    updateMessage (e) {  
      this.$store.commit('updateMessage', e.target.value)
    }
  }
}
</script>

<style scoped>

</style>
