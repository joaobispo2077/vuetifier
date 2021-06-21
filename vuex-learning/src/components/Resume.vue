<template>
    <Painel title="Resumo" purple>
        <div class="resumo">
            <span>Total: <strong>{{ total | cash }}</strong></span>
            <hr>
            <button>Finalizar!</button>
        </div>
    </Painel>
</template>

<script>
export default {
    computed: {
        total() {
            return this.products.map(p => p.quantity * p.price)
                .reduce((total, atual) => total + atual, 0)
        },
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
</style>
