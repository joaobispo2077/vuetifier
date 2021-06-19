<template>
	<div id="app">
		<keep-alive>
			<component :is="component" />
		</keep-alive>
		<button @click="citation = !citation">{{citation ? 'Close' : 'Show'}} citations</button>
	</div>
</template>

<script>
import Citations from './components/Citations'
import About from './components/About'

export default {
	components: { Citations, About },
	data: () => ({
		citation: false,
	}),
	computed: {
		component() {
			return this.citation ? 'Citations' : 'About';
		}
	}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		font-size: 1.6rem;
	}

	button {
        outline: none;
        padding: 5px 15px 10px;
        margin: 10px 5px;
        border-radius: 3px;
        font-size: 2rem;
        font-weight: 300;
        color: #FFF;
        background-color: rgba(0, 0, 0, .5);
    }
</style>