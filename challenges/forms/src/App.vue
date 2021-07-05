<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if='!submitted'>
				<div class="cabecalho">Formulário</div>
				<!-- Exercicio 01 -->
				<!-- Criar uma formulário de registro -->
				<!-- Nome completo (Nome e Sobrenome) -->
				<!-- Email -->
				<!-- Senha -->
				<!-- Armazenar Dados? (Sim/Não) -->
				<!-- Exercicio 02 -->
				<!-- Só mostrar o fomulário de não tiver sido submetido -->
				<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->
				<Rotulo name="Nome completo">
					<Fullname  v-model='user.fullname' />
				</Rotulo>
				<Rotulo name="E-mail">
					<input type="text" v-model='user.email'>
				</Rotulo>
				<Rotulo name="Senha">
					<input type="password" v-model='user.password'>
				</Rotulo>
				<Rotulo name="Armazenar Dados? (Sim/Não)">
					<span> <input type="radio" :value="true" v-model="user.allowedToPersist" />Sim</span>
					<span> <input type="radio" :value="false" v-model="user.allowedToPersist"/>Não</span>
				</Rotulo>
				<button type="submit" @click.prevent="submitted = true">Enviar</button>
				
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
			</form>
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<Rotulo name="Nome completo">
					<span>{{ user.fullname }}</span>
				</Rotulo>
				<Rotulo name="E-mail">
					<span>{{ user.email }}</span>
				</Rotulo>
				<Rotulo name="Senha">
					<span>{{ user.password }}</span>
				</Rotulo>
				<Rotulo name="Armazenar Dados? (Sim/Não)">
					<span>{{ user.allowedToPersist }}</span>
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import Fullname from './components/Fullname.vue'

export default {
	name: 'app',
	components: { Rotulo,Fullname },
	data: () => ({
		user: {
			fullname: '',
			email: '',
			password: '',
			allowedToPersist: false,
		},
		submitted: false
	})
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
