<template>
    <div class="box">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong> {{ invertText() }} </strong> </p>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    },
    methods: {
        invertText() {
           return this.name.split('').reverse().join('');
        }
    }
}
</script>

<style scoped>
    .box {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
