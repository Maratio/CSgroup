import ITask from "../models/ITask";


function getRandomStringFromArray(arr: string[]) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export function generateNewTask(
  _id?: number,
  _title?: string,
  _description?: string,
  _createdAt?: string,
  _priority?: string
) : ITask {
  return ({
    id: _id || new Date().getTime(),
    title: _title || `Новая задача ${new Date().getTime()}`,
    description:
      _description || `Описание новой задачи ${new Date().getTime()}`,
    createdAt: _createdAt || new Date().toISOString(),
    priority:
      _priority || getRandomStringFromArray(["низкий", "средний", "высокий"]),
  });
}
