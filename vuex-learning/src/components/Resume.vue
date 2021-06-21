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
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('Cart',{
            total: 'getTotal',
        }),
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
