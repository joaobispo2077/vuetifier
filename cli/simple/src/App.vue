<template>
  <div id="app">{{title}} - {{test}}

  <button @click="test++">Aumentar</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: 'HelloWorld',
    test: 123,
  })
}
</script>

<style>
#app {
  background: chocolate;
  color: #fff;
}
</style>