<template>
  <div class="col-md-10 mx-auto text-success py-3">
    <h3>{{ name }}</h3>
    <ul type="square">
      <li>Incomplete</li>
      <li class="text-secondary">Complete</li>
    </ul>
    <ul class="list-group">
      <div class="row">
        <div class="col-md-4 p-3" v-for="todo in getTodos" :key="todo.id" @dblclick="doubleClick(todo)">
          <li class="list-group-item" :class="{ 'bg-secondary' : todo.completed }">{{ todo.title }}
            <img src="/trash.svg" style="width : 15px; height : 15px;" @click="delTodo(todo.id)">
          </li>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: function() {
    return {
      name: "Todo"
    };
  },
  methods : {
    ...mapActions([
      'fetchTodos',
      'delTodo',
      'updateTodo'
    ]),
    doubleClick(todo){
      let data={
        id : todo.id,
        title : todo.title,
        completed : !todo.completed
      };
      this.updateTodo(data);
    }
    
  } ,
  computed: {
    ...mapGetters([
      "getTodos"
    ])
  },
  created(){
     this.fetchTodos();
  }
};
</script>

<style scoped>
  .list-group li{
    background-color : green;
    color :aliceblue;
  }
</style>
