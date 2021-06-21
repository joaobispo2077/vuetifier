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
import { mapGetters, mapActions } from 'vuex';

export default {
    computed:  {
        ...mapGetters([
             'defaultQuantity', 
             'defaultPrice'
        ]),
        quantity: {         
            get() {
                return this.defaultQuantity;
            },
            set(value) {
                this.changeDefaultQuantity(value)
            }
        }, 
        price: {
            get() {
                return this.defaultPrice;
            },
            set(value) {
                this.changeDefaultPrice(value)
            }
        }
    },
    methods: {
        ...mapActions([
            'changeDefaultQuantity',
            'changeDefaultPrice',
        ])
    }


}
</script>

<style>
    .parameters {
        display: flex;
        justify-content: space-around;
    }
</style>
