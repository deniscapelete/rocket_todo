import useLocalStorage from "use-local-storage"
import { TASKS_KEY, type Task } from "../models/task"

export default function useTasks(){
  const [tasks]= useLocalStorage<Task[]>(TASKS_KEY, []);

  return {
    tasks,
    tasksCOunt: tasks.length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length
  }
}