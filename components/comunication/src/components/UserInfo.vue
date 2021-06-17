<template>
    <div class="box">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong> {{ invertText() }} </strong> </p>
        <p>Idade do usuário: {{age}}</p>
        <button @click="addHashtag">Adicionar #</button>
        <button @click="changeName">Adicionar ! (callback)</button>
    </div>
</template>

<script>
import eventBus from "@/eventBus";

export default {
    props: {
        name: {
            type: String,
            required: true
        },
        changeName: Function,
        age: {
            required: true
        }
    },
    methods: {
        invertText() {
           return this.name.split('').reverse().join('');
        },
        addHashtag() {
            const old = this.name;
            this.name += '#';
            this.$emit('changedName',{
                old,
                newer: this.name
            });
        }
    },
    created() {
        eventBus.onChangeAge(age => {
            this.age = age;
        });
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
