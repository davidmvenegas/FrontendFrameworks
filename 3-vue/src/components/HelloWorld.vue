<template>
  <div>
    <ul>
      <li v-for="todo in todos" v-bind:key="todo">{{ todo }}</li>
    </ul>

    <form v-on:submit.prevent="addTodo">
      <input v-model="todoText" />
      <button type="submit">Add Todo</button>
    </form>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => {
    return {
      todos: [],
      todoText: '',
    }
  },
  methods: {
    addTodo() {
      this.todos = [...this.todos, this.todoText]
      localStorage.setItem("todos", JSON.stringify(this.todos))
      this.todoText = "";
    }
  },
  mounted() {
    const existingTodos = JSON.parse(localStorage.getItem('todos'))
    this.todos = existingTodos || [];
  },
}
</script>

<style></style>