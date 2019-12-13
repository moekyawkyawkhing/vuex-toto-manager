<template>
    <div class="row">
        <div class="col-md-12 form-group">
            <label for="filter">Filter : </label>
            <select v-model="filter">
                <option value="100">100</option>
                <option value="150">150</option>                
                <option value="200">200</option>
            </select>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data : function(){
        return {
            filter : '200'
        }
    },
    methods :  mapActions(['filterTodo']),
    watch : {
        filter(newVal){
            this.filterTodo(newVal);
        }
    }
}
</script>