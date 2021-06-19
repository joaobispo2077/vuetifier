<template>
    <div class="citations">
        <span>
            <button @click="number--">&lt;</button>
            <button @click="number++">&gt;</button>
        </span>
        <Citation>
            <h1>{{citations[index].author}}</h1>
            <p>{{citations[index].text}}</p>
            <h6>{{citations[index].font}}</h6>
        </Citation>
        
        <hr />
        {{ number }} {{ index }}
    </div>
</template>

<script>
import Citation from "./Citation.vue";

export default {
    components: {Citation},
    data() {
        return {
            number: 0,
            citations: [{
                font: 'Jornal do Empreendedor',
                text: 'Lembre-se sempre que você é absolutamente único. Assim como todos os outros.',
                author: 'Margaret Mead'
            }, { 
                font: 'Frases de Mãe',
                text: 'Isso não é um quarto, é um chiqueiro.',
                author: 'Roberta'
            }, {
                font: 'Frases de Pai',
                text: 'Vou contar até 3! 1, 2, 2...',
                author: 'Gustavo'
            }]
        }
    },
    computed: {
        index() {
            return Math.abs(this.number % 3)
        }
    }
}
</script>

<style scoped>
    .citations {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
