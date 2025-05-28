import { addTask, deleteTask, editTask } from "../store/reducers/tasksSlice";
import { IStatesForm } from "../models/IStatesForm";
import { Dispatch } from "react";
import { PayloadAction } from "@reduxjs/toolkit";
import ITask from "../models/ITask";

export const handleSubmitCreate = (
  statesForm: IStatesForm,
  setModal: (newModal: boolean) => void,
  dispatch: Dispatch<PayloadAction<ITask>>
) => {
  const id = new Date().getTime();
  const createdAt = new Date().toISOString();
  const title = statesForm.title;
  const description = statesForm.description;
  const priority = statesForm.priority;
  dispatch(addTask({ id, title, description, priority, createdAt }));
  setModal(false);
  statesForm.setTitle("");
  statesForm.setDescription("");
  statesForm.setPriority("");
};

export const handleClear = (statesForm: IStatesForm) => {
  statesForm.setTitle("");
  statesForm.setDescription("");
  statesForm.setPriority("");
};

export const handleEditTask = (setModal: (newModal: boolean) => void) => {
  setModal(true);
};

export const handleDeleteTask = (
  dispatch: Dispatch<PayloadAction<number>>,
  task: ITask
) => {
  dispatch(deleteTask(task.id));
};

export const handleSubmitEdit = (
  statesForm: IStatesForm,
  setModal: (newModal: boolean) => void,
  dispatch: Dispatch<PayloadAction<ITask>>,
  task: ITask
) => {
  const title = statesForm.title;
  const description = statesForm.description;
  const priority = statesForm.priority;
  dispatch(editTask({ ...task, title, description, priority }));
  setModal(false);
};

