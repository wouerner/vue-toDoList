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
      let task = new Task()
      task.completed = false
      task.title = value
      this.$emit('newTask', task)
    }
  }
}
</script>
<style>
/* omitido */
</style>
