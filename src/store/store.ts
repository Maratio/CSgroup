import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import tasksReducer from "./reducers/tasksSlice";

const rootReducer = combineReducers({
  tasksReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['tasks/addTask'],
       
      },
    }),
  }
);
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
