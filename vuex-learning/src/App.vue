<template>
	<div id="app">
		<h1>Exercícios Vuex</h1>
		<div class="linha">
			<Params />
			<Store />
		</div>
		<div class="linha">
			<Cart />
			<Resume />
		</div>
	</div>
</template>

<script>
import Params from './components/Params'
import Store from './components/Store'
import Cart from './components/Cart'
import Resume from './components/Resume'

export default {
	name: 'app',
	components: { Params, Store, Cart, Resume }
}
</script>

<style>
* {
	font-family: 'Oswald', sans-serif;
}

body {
	font-size: 2rem;
	background: linear-gradient(to right, rgb(0, 0, 0), rgb(67, 67, 67));
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #FFF;
}

h1 {
	font-weight: 200;
}

.linha {
	display: flex;
}

button {
	font-size: 1.8rem;
	padding: 5px 15px;
	border-radius: 5px;
	color: #222;
	background-color: #FAFAFA;
	outline: none;
	border: none;
}
</style>
