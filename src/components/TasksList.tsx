import React, { useEffect, useState } from "react";
import { useAppSelector } from "../hooks";
import TaskItem from "./TaskItem";
import TasksFilter from "./TasksFilter";
import { useFilter } from "../hooks/useFilter";
import IFilter from "../models/IFilter";
import ITask from "../models/ITask";

const TasksList = () => {
  const tasks = useAppSelector((state) => state.tasksReducer);
  const [filter, setFilter] = useState<IFilter>({ sortDate: "", searchPriority: "" });
  const filteredTasks: ITask[] = useFilter(tasks, filter.sortDate, filter.searchPriority);
  
  return (
    <div>
      <h2>Task List</h2>
      <TasksFilter filter={filter} setFilter={setFilter} />
      <ul>
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
