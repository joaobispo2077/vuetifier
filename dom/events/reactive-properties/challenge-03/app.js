new Vue({
    el: '#desafio',
    data: {
        value: 37
    },
    computed: {
        result() {
            return this.value !== 37 ? 'Valor diferente de 37' : 'Valor igual a 37';
        }
    },
    watch: {
        result() {
            setTimeout(() => this.value = 0, 5000);
        }
    }
});