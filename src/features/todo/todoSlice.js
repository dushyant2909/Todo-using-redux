import { createSlice, nanoid } from '@reduxjs/toolkit'

// Define initial state first
const initialState = {
    todos: [
        { id: 1, text: "Hello" }
    ]
}

// create a slice slice is a big version of Reducer.
// Reducer is functionality
export const todoSlice = createSlice({
    name: 'todo', //every slice has a name (give any name)
    initialState, //every slice has initial state
    // In context api you only declare function not define it but here must define
    // Reducer is just a functionality.
    reducers: {
        //every reducer get two things state and action
        // state tells us the state at that time means suppose initial state 
        // has 10 todos so all these are told by state. Abhi kya stuation h
        // action gives values necessary for functions like paramenters.
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                // text: action.payloadload.text or simply
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            const id = action.payload;
            state.todos = state.todos.filter((todo) => todo.id !== id)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            state.todos = state.todos.map((todo) => todo.id === id ? { ...todo, text } : todo);
        }
    }
})

//slice is not exported fully just like the way you exported
// export reducers functionality also
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
// we exported them as they will be used in our components

export default todoSlice.reducer;
// We exported them so that store has all infomation about reducers