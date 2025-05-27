import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ITask from '../../models/ITask'


const initialState: ITask[] = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state = initialState, action: PayloadAction<ITask>) {
        if(!action.payload.priority){
            action.payload.priority = 'low'
            }
      state.push(action.payload);
    },
    editTask(state, action) {
      const task = state.find((task) => task.id === action.payload.id);
      if (task) {
        task.title = action.payload.title;
        task.description = action.payload.description;
        task.priority = action.payload.priority;
      }
    },
    deleteTask(state, action) {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;