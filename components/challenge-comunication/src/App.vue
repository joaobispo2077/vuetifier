<template>
	<div id="app">
		<UserList @selectUser="selectedUser = $event" :users="users" />
		<UserDetail :user="selectedUser"/>
	</div>
</template>

<script>
import UserList from './components/UserList.vue'
import UserDetail from './components/UserDetail.vue'

export default {
	name: "app",
	components: { UserList, UserDetail },
    data: () => ({        
			users: [
					{ id: 1, name: 'Ana', age: 31 },
					{ id: 2, name: 'Carlos', age: 22 },
					{ id: 3, name: 'Daniel', age: 40 },
					{ id: 4, name: 'Ema', age: 17 },
					{ id: 5, name: 'Lia', age: 28 }
			],
			selectedUser: null        
    }),
}
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;

	display: flex;
	font-size: 2rem;
}

#app div {
	margin: 20px;
}
</style>
