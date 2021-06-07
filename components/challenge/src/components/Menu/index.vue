<template>
  <v-navigation-drawer app>
    <Header />
    <v-divider></v-divider>
    <Tabs />
  </v-navigation-drawer>
</template>

<script>
import Header from './Header.vue';
import Tabs from './Tabs.vue';
export default {
  components: {
    Header,
    Tabs
  },
}
</script>

<style>

</style>