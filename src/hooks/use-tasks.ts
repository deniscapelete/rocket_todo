import useLocalStorage from "use-local-storage"
import { TASKS_KEY, TaskState, type Task } from "../models/task"
import React from "react";
import { delay } from "../helpers/utils";

export default function useTasks(){
  const [tasksData]= useLocalStorage<Task[]>(TASKS_KEY, []);
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [isLoadingTasks, setIsLoadingTasks] = React.useState(true);

  async function fetchTasks(){
    if(isLoadingTasks){
      console.time('Carregando tarefas...')
      await delay(2000);
      setIsLoadingTasks(false);
      console.timeEnd('Carregando tarefas...')
    }

    setTasks(tasksData)
  }

  React.useEffect(()=>{
    fetchTasks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasksData]);

  return {
    tasks,
    createdTasksCount: tasks.filter((task) => task.state === TaskState.Created).length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
    isLoadingTasks,
  }
}