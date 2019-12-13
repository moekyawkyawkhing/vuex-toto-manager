<template>
  <form @submit="onSubmit">
      <h4>Add Todo</h4>
    <div class="row">
      <div class="col-md-10 form-group">
        <input type="text" class="form form-control" required v-model="title" placeholder="Add todo...." />
      </div>
      <div class="col-md-2">
        <input type="submit" value="ADD" class="btn btn-sm btn-success btn-block" />
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data : function(){
        return {
            title : ''
        }
    },
    methods : {
        ...mapActions([
            'addTodos'
        ]),
        onSubmit(e){
            e.preventDefault();
            this.addTodos(this.title);
            this.title= '';
        }
    }
}
</script>