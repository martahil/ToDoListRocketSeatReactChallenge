import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { PlusCircle } from "phosphor-react"
import { TasksBoardHeader } from "./components/TasksBoardHeader"
import { TaskItem } from "./components/TaskItem"


import { useState } from "react"

import styles from './App.module.css'
import './global.css'
import { Empty } from "./components/Empty"

export interface ITask {
  id: number
  text: string
  isChecked: boolean
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [inputValue, setInputValue] = useState('')

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }
    return prevValue
  }, 0)

  function handleAddTask() {
    if (!inputValue) {
      return
    }
    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }
    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id)
    if (!confirm("Do you really want to delete this task?")) {
      return
    }
    setTasks(filteredTasks)
  }

  function handleToggleTask({ id, value }: { id: number, value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }
      return { ...task }
    })
    setTasks(updatedTasks)
  }

  return (
    <main>
      <Header />

      <section>
        <div className={styles.createTaskDiv}>
          <Input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            className={styles.taskAddInput}
          />
          <Button onClick={handleAddTask} className={styles.createBtn}>
            Create
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>

        <div>
          <TasksBoardHeader
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />

          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </main>
  )
}

export default App
