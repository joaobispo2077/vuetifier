<template>
    <div class="usuario-detalhe">
        <h2 v-if="!user">Usuário não selecionado!</h2>
        <div v-else>
            <h2>ID: {{ user.id }}</h2>
            <h2>Nome: {{ user.name }}</h2>
            <h2>Idade: {{ user.age }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    props: ['user'],
}
</script>

<style>
    .usuario-detalhe {
        flex: 1;
        border: 1px solid #CCC;
    }
</style>
