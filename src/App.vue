<template>
  <div class="container">
        <app-add-todo class="my-3"></app-add-todo>
        <app-filter></app-filter>
        <app-todo/>
  </div>
</template>

<script>
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import Filter from './components/Filter';
export default {
  components : {
    appTodo : Todo,
    appAddTodo : AddTodo,
    appFilter : Filter
  }
}
</script>

<style>
  * {
    font-family: 'Times New Roman', 'Times, serif';
  }
</style>
