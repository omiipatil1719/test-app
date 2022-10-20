import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: []
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            state.tasks.push({
                id: Math.floor(Math.random() * 100),
                task: action.payload.task});
        },
        deleteTodo:(state,action)=>{
          state.tasks=state.tasks.filter((item)=>item.id!=action.payload.id)
        },

        editTodo:(state,action)=>{
            console.log('action',action)
            let findIndex=state.tasks.findIndex((item)=>item.id===action.payload.id)
            let array=[...state.tasks];
            if(findIndex > -1){
                array[findIndex].task=action.payload.task;
                state.tasks=array;
            }

        }
    }
});

export const { addTodo ,deleteTodo, editTodo} = todoSlice.actions;

export const todoSelector = state => state.todo.tasks;
