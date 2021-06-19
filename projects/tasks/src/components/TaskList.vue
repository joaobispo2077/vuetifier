<template>
  <div class="tasklist">
		<template v-if="tasks.length">
          <Task v-for="(task, index) in tasks" :key="task.name" :task="task" 
          @toggleTaskStatus="$emit('toggleTaskStatus', index)"
          @taskDeleted="$emit('removeTask', index)"></Task>
		</template>
		<template v-else>
			<p class="no-task">Sua vida está em dia!</p>
		</template>
  </div>
</template>

<script>
import Task from './Task.vue';

export default {
  components: {
    Task
  },
  props: { 
    tasks:{
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  ul, li {
    list-style: none;
  }

  .tasklist {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .tasklist .task {
    margin: 10px;
  }

  .no-task {
		color: #AAA;
		font-size: 1.7rem;
	}
</style>