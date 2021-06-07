<template>
  <v-app>
    <Menu />
    <Toolbar />
    <Carousel />
    <Footer />
  </v-app>
</template>

<script>
import Menu from '@/components/Menu/index.vue';
import Toolbar from '@/components/Toolbar.vue';
import Carousel from '@/components/Carousel.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Menu,
    Toolbar,
    Carousel,
    Footer
  }
}
</script>
