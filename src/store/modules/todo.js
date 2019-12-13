import axios from 'axios';
const state= {
    todos : []
};

const getters= {
    getTodos(state){
        return state.todos;
    }
};

const actions= {
    async fetchTodos({ commit }){
        const response= await axios.get('https://jsonplaceholder.typicode.com/todos');
        commit('setTodos', response.data);
    },
    async addTodos({ commit }, title){
        const response= await axios.post('https://jsonplaceholder.typicode.com/todos', 
            { 
                title,
                completed : false 
            }
        );
        commit('newTodo', response.data);
    },
    async delTodo({ commit }, id){
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('delTodo', id);
    },
    async filterTodo({ commit }, filter){
        const response= await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${filter}`);
        commit('setTodos', response.data);
    },
    async updateTodo({ commit }, todo){
        const response= await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, 
            todo
        );
        commit('updateTodo', response.data);
    }
};

const mutations= {
    setTodos(state, todos){
        state.todos = todos;
    },
    newTodo(state, todo){
        state.todos.unshift(todo);
    },
    delTodo(state, id){
        state.todos= state.todos.filter(data => {
            return data.id != id;
        })
    },
    updateTodo(state, todo){
        const index= state.todos.findIndex(data => data.id === todo.id);
        if(index !== -1){
            state.todos.splice(index, 1, todo);
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}