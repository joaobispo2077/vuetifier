new Vue({
    el: '#challenge',
    data: {
        value: ''
    },
    methods: {
        showAlert() {
            alert('Alerta...');
        },
        reloadText(event) {
            this.value = event.target.value;
        }
    }
})