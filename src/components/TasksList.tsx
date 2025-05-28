import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useFilter } from "../hooks/useFilter";
import IFilter from "../models/IFilter";
import ITask from "../models/ITask";
import TaskItem from "./TaskItem";
import TasksFilters from "./TasksFilters";
import { addTask } from "../store/reducers/tasksSlice";

const TasksListContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TasksListHeader = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const TasksFiltersContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TasksListUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

const TasksListLi = styled.li`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #f9f9f9;
  }
`;

const TasksList = () => {
  const tasks = useAppSelector((state) => state.tasksReducer);
  const [filter, setFilter] = useState<IFilter>({ sortDate: "", searchPriority: "" });
  const filteredTasks: ITask[] = useFilter(tasks, filter.sortDate, filter.searchPriority);
  const dispatch = useAppDispatch();


  useEffect(() => {
  const timer = setInterval(() => {
    // функция, которая будет вызвана через интервал
  function getRandomStringFromArray(arr: string[]) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}


    const newTask: ITask = {
      id: new Date().getTime(),
      title: `Новая задача ${new Date().getTime()}`,
      description: `Описание новой задачи ${new Date().getTime()}`,
      createdAt: new Date(),
      priority: getRandomStringFromArray(['низкий', "средний", "высокий"])
    };
    dispatch(addTask({...newTask}));
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
    // <div>
    //   <h2>Список задач</h2>
    //   <TasksFilters filter={filter} setFilter={setFilter} />
    //   <ul>
    //     {filteredTasks.map((task) => (
    //       <TaskItem key={task.id} task={task} />
    //     ))}
    //   </ul>
    // </div>
  );
};

export default TasksList;
