<template>
    <section class="todoapp">
        <header class="header">
            <h1>Tarefas</h1>
            <input-task v-on:newTask="addTask" ></input-task>
            <task-list v-bind:todo-list="tasks" ></task-list>
        </header>
    </section>
</template>
<script>

import InputTask from '@/components/InputTask'
import TaskList from '@/components/TaskList'

export default {
  name: 'ToDo',
  data () {
    return {
      tasks: []
    }
  },
  components: {
    InputTask,
    TaskList
  },
  methods: {
    addTask (task) {
      this.tasks.push(task)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
