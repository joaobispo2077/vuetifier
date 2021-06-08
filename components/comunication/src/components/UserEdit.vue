<template>
    <div class="box">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do usuário: {{age}}</p>
        <button @click="addedAt">Adicionar @</button>
    </div>
</template>

<script>
export default {
    props: ['age'],
    methods: {
        addedAt() {
            let cloneAge = String(this.age);
            this.$emit('addedAt', cloneAge += '@' );
        }
    }
}
</script>

<style scoped>
    .box {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
