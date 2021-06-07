<template>
<v-list dense class="pt-0">
  <v-list-item v-for="item in itensMenu" :key="item.title">
    <v-list-item-icon>
      <v-icon>{{ item.icon }}</v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</v-list>
</template>

<script>
export default {
  data: () => ({
      itensMenu: [
        {title: 'Início', icon: 'mdi-view-dashboard'},
        {title: 'Sobre', icon: 'mdi-forum'}
      ],
  })
}
</script>

<style>

</style>