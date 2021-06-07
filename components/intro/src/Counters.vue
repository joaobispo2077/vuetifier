<template>
<div>
  <h1>Contadores: </h1>
    <Counter v-for="c in 5" :key="c"/>
</div>  
</template>

<script>
import Counter from './Counter';

export default {
  components: {
    Counter
  }
}
</script>

<style>

</style>