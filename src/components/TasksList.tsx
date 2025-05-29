import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useFilter } from "../hooks/useFilter";
import IFilter from "../models/IFilter";
import ITask from "../models/ITask";
import { addTask } from "../store/reducers/tasksSlice";
import {
  TasksFiltersContainer,
  TasksListContainer,
  TasksListHeader,
  TasksListLi,
  TasksListUl,
} from "../styles/styles";
import { generateNewTask } from "../utils/utils";
import TaskItem from "./TaskItem";
import TasksFilters from "./TasksFilters";

const TasksList = () => {
  const tasks = useAppSelector((state) => state.tasksReducer);
  const [filter, setFilter] = useState<IFilter>({
    sortDate: "",
    searchPriority: "",
  });
  const filteredTasks: ITask[] = useFilter(
    tasks,
    filter.sortDate,
    filter.searchPriority
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      const newTask: ITask = generateNewTask();
      dispatch(addTask({ ...newTask }));
    }, 20000);
    return () => clearInterval(timer);
  }, [tasks, dispatch]);

  return (
    <TasksListContainer>
      <TasksListHeader>Список задач</TasksListHeader>
      <TasksFiltersContainer>
        <TasksFilters filter={filter} setFilter={setFilter} />
      </TasksFiltersContainer>
      <TasksListUl>
        {filteredTasks.map((task) => (
          <TasksListLi key={task.id}>
            <TaskItem task={task} />
          </TasksListLi>
        ))}
      </TasksListUl>
    </TasksListContainer>
  );
};

export default TasksList;
