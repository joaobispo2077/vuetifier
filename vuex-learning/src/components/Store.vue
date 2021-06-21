<template>
    <Painel title="Loja Virtual" green>
        <div class="store">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantity">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="price">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>

import { mapMutations } from 'vuex';


export default {
    data() {
        return {
            sequence: 1,
            quantity: 1,
            price: 9.99,
        }
    },
    methods: {
        ...mapMutations(['addProduct']),
        adicionar() {
            const product = {
                id: this.sequence,
                name: `Produto ${this.sequence}`,
                quantity: this.quantity,
                price: this.price
            }
            this.sequence++
            // eslint-disable-next-line
            console.log(product)

            this.addProduct(product);
        }
    }
}
</script>

<style>
    .store {
        display: flex;
        justify-content: center;
    }

    .store > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
