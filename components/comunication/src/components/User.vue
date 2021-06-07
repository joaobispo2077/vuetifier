<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <button @click="changeName">Mudar nome</button>
        <hr>
        <div class="boxes">
            <UserInfo :name="name" />
            <UserEdit />
        </div>
    </div>
</template>

<script>
import UserInfo from './UserInfo'
import UserEdit from './UserEdit'

export default {
    components: { UserInfo, UserEdit },
    data: () => ({
        name: 'Goku'
    }),
    methods: {
        changeName() {
            this.name += '!';
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .boxes {
        display: flex;
    }

    .boxes > * {
        margin: 10px;
    }
</style>
