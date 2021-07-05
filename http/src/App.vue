<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input
					type="text"
					size="lg"
					v-model='user.name'
					placeholder="Insira o seu nome"
				/>
			</b-form-group>
			<b-form-group label="E-mail:">
				<b-form-input
					type="text"
					size="lg"
					v-model='user.email'
					placeholder="Insira o seu e-mail"
				/>
			</b-form-group>
			<hr>
			<b-button @click="submit" size="lg" variant="primary">Salvar</b-button>
			<b-button class="ml-2" @click="getUsers" size="lg" variant="success">Listar usuários</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(user, id) in users" :key='id'>
				<strong>Nome: {{user.name }}</strong> <br/>
				<strong>E-mail: {{user.email }}</strong>  <br/>
				<strong>ID: {{ id }}</strong>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data: () => ({
		users: [],
		user: {
			name: '',
			email: ''
		}
	}),
	methods: {
		submit() {
			this.$http.post('users.json', this.user).then(response => {
				this.user.name ='';
				this.user.email ='';
			})
		},
		getUsers() {
			this.$http.get('users.json').then(response => {
				this.users = response.data;
				console.log(this.users);
			})
		}
	}
	// created() {
	// 	this.$http.post('users.json', {
	// 		name: 'Joao',
	// 		email: 'joaobispo2077@gmail.com'
	// 	}, {

	// 		headers: {
	// 			Accept: "application/json",
	// 			"Content-Type": "application/json",
	// 			'Access-Control-Allow-Origin': '*'
	// 		}
	// 	}).then(response => console.log(response));
	// }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
