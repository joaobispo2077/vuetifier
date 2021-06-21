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

import { mapActions, mapGetters } from 'vuex';


export default {
    data() {
        return {
            sequence: 1,
        }
    },
    computed: {
        ...mapGetters({
            quantity: 'defaultQuantity',
            price: 'defaultPrice'
        })
    },
    methods: {
        ...mapActions(['addProduct']),
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
            // Com mutations
            // this.$store.state.products.push(product);
            // this.$store.commit('addProduct', product);

            // Com actions
            // this.$store.dispatch('addProduct', product)
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
