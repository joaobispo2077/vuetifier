<template>
  <div class="new-task">
    <input class="form-element" type="text" v-model="name" placeholder="Nova tarefa?"/>
    <button class="form-element" @click="addNewTask">+</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: ''
  }),
  methods: {
    addNewTask() {
      this.$emit('newTask', this.name);
      this.name = '';
    }
  }
}
</script>

<style scoped>
  .new-task {
    margin: 35px;
  }

  .form-element {
    outline: none;
    font-size: 2rem;
    border: 1px solid #FFF;
    padding: 5px 10px 8px;
    color: #FFF;
  }

  input.form-element {
    width: 500px;
    background: #FFF2;
    border-bottom-left-radius: 8px;
  }

  button.form-element {
    border-left: none;
    background-color: #2196F3;
    border-bottom-right-radius: 8px;
  }
</style>