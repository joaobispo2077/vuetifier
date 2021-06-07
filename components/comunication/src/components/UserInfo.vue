<template>
    <div class="box">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong> {{name}} </strong> </p>
    </div>
</template>

<script>
export default {
    props: ['name']
}
</script>

<style scoped>
    .box {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
