import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ITask from '../../models/ITask'


const initialState: ITask[] = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state = initialState, action: PayloadAction<ITask>) {
        if(!action.payload.priority){
            action.payload.priority = 'низкий'
            }
      state.push(action.payload);
    },
    editTask(state, action: PayloadAction<ITask>) {
  return state.map((task) => {
    if (task.id === action.payload.id) {
      console.log(action.payload.id);
      
      return {
        ...task,
        title: action.payload.title,
        description: action.payload.description,
        priority: action.payload.priority,
      };
    }
    return task;
  });
},
    deleteTask(state, action) {
      return state.filter((task) => task.id !== action.payload);
    },
  },
  // для ассинхронного взаимодействия
  // extraReducers: (builder) => {
  //   builder.addCase(
  //     fetchTasks.fulfilled.type,
  //     (state, action: PayloadAction<ITask[]>) => {
  //       state.isLoading = false;
  //       state.error = "";
  //       state.users = action.payload;
  //     }
  //   );
  //   builder.addCase(
  //     fetchTasks.rejected.type,
  //     (state, action: PayloadAction<string>) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     }
  //   );
  //   builder.addCase(fetchTasks.pending.type, (state) => {
  //     state.isLoading = true;
  //   });
  // },
});


export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;