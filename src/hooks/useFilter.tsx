import { useMemo } from "react";
import ITask from "../models/ITask";

const useFilterPriority = (tasks: ITask[], searchPriority: string) => {
  const searchTasksPriority = useMemo(() => {
    if (!searchPriority || searchPriority === "notPriority") {
      return tasks;
    } else {
      return tasks.filter((task) => task.priority === searchPriority);
    }
  }, [searchPriority, tasks]);

  return searchTasksPriority;
};

export const useFilter = (
  tasks: ITask[],
  sortDate: string,
  searchPriority: string
) => {
  const searchTasksPriority = useFilterPriority(tasks, searchPriority);
  const sortedAndSearchTasks = useMemo(() => {
    switch (sortDate) {
      case "ascOrder":
        const sortedTasksOrder = [...searchTasksPriority].sort((a, b) =>
          a.createdAt.localeCompare(b.createdAt)
        );
        return sortedTasksOrder;
      case "descOrder":
        const sortedTasksAscOrder = [...searchTasksPriority].sort((a, b) =>
          b.createdAt.localeCompare(a.createdAt)
        );
        return sortedTasksAscOrder;
      default:
        return searchTasksPriority;
    }
  }, [searchTasksPriority, sortDate]);

  return sortedAndSearchTasks;
};
