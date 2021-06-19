<template>
	<div id="app">
		<h1>Tarefas</h1>
		<ProgressBar :progress="progress"/>
		<TaskInput
			@newTask="addNewTask($event)"
		/>
		<TaskList 
			:tasks="tasks"
			@toggleTaskStatus="toggleTaskStatus" 
			@removeTask="deleteTask($event)" />
	</div>
</template>

<script>
import TaskList from './components/TaskList.vue';
import TaskInput from './components/TaskInput.vue';
import ProgressBar from './components/ProgressBar.vue';

export default {
	components: { TaskList, TaskInput, ProgressBar },
	data: () => ({
		tasks: []
	}),
	computed: {
		progress() {
			const total = this.tasks.length;
			const done = this.tasks.filter(task => !task.pending).length;

			return Math.round(done / total * 100) || 0;
		}
	},
	methods: {
		addNewTask(task) {
			const isNotUnique = this.tasks.find(tsk => tsk.name === task);

			if(!isNotUnique) 
			this.tasks.push({name: task, pending: true});

		},
		deleteTask(index) {
			this.tasks.splice(index, 1);
		},
		toggleTaskStatus(index) {
			this.tasks[index].pending = !this.tasks[index].pending;
		}
	},
	watch: {
		tasks: {
			deep: true,
			handler() { 
				localStorage.setItem('tasks', JSON.stringify(this.tasks));
			}
		}
	},
	created() {
		this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
