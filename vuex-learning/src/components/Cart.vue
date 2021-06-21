<template>
    <Painel title="Carrinho" blue :notification="products.length">
        <div class="carrinho">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Qtde</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.name">
                        <td>{{ product.name }}</td>
                        <td>{{ product.quantity }}</td>
                        <td>{{ product.price | cash }}</td>
                    </tr>
                </tbody>
            </table>
            <hr>
            <div class="total">
                <span>Total: <strong>{{ total | cash }}</strong></span>
            </div>
        </div>
    </Painel>
</template>

<script>

import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters({
            total: 'getTotal',
        }),
        products() {
            return  this.$store.state.products;
        }
    },
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }

    hr {
        margin-top: 30px;
    }

    .total {
        display: flex;
        justify-content: flex-end;
    }
</style>
