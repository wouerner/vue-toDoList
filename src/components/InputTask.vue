<template>
    <div>
        <v-text-field
            placeholder="O que precisa ser feito?"
            label="Tarefas"
            v-on:keyup.enter="addTask"
            required
            ></v-text-field>
    </div>
</template>

<script>
import { Task } from './models/Task'
export default {
  data () {
    return {
    }
  },
  methods: {
    addTask ($event) {
      let value = $event.target.value
      let task = this.createTask(value)
      this.broadcast(task)
      this.clearField($event)
    },
    createTask (value) {
      let task = new Task()
      task.completed = false
      task.title = value
      return task
    },
    broadcast (task) {
      this.$emit('newTask', task)
    },
    clearField ($event) {
      console.log($event.target.value = '')
      // this.$el.querySelector('input').value = ''
    }
  }
}
</script>
<style>
/* omitido */
</style>
