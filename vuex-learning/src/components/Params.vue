<template>
    <Painel title="Parâmetros" red>
        <div class="parameters">
            <span>
                <strong>Quantidade Padrão: </strong> 
                <input type="number" v-model="quantity">
            </span>
            <span>
                <strong>Preço Padrão: </strong>
                <input type="number" v-model="price">
            </span>
        </div>
    </Painel>
</template>

<script>
export default {
    data() {
        return {
            quantity: 0,
            price: 0
        }
    }
}
</script>

<style>
    .parameters {
        display: flex;
        justify-content: space-around;
    }
</style>
