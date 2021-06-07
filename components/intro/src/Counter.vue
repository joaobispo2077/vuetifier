<template>
  <div class="counter">
    <h2>Contador</h2>
    <span>{{counter}}</span>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    counter: 0
  }),
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    }
  }
}
</script>

<style scoped>
.counter span {
    border-bottom: 1px solid blue;
    height: 30px;
    padding: 5px 25px;
}

.counter button {
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background-color: mediumslateblue;
  color: #fff;
  margin-left: 10px;
  outline: none;
  cursor: pointer;
}
</style>