import Vue from 'vue';

export default new Vue({
  methods: {
    changeAge(age) {
      this.$emit('addedAt', age);
    },
    onChangeAge(callback) {
      this.$on('addedAt', callback);
    }
  }
});