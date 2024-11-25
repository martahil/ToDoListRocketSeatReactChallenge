import styles from './TasksBoardHeader.module.css'

interface Props {
  tasksCounter: number
  checkedTasksCounter: number
}

export function TasksBoardHeader({ tasksCounter, checkedTasksCounter }: Props) {
  return (
    <div className={styles.boardHeader}>
      <div className={styles.createdAndCompletedTasks}>
        <div className={styles.createdTasksDiv}>
          <span className={styles.createdTasksTxt}>Created tasks</span>
          <span className={styles.createdTasksCounter}>{tasksCounter}</span>
        </div>

        <div className={styles.completedTasksDiv}>
          <span className={styles.completedTasksTxt}>Completed tasks</span>
          <span className={styles.completedTasksCounter}>
            {tasksCounter === 0 ? tasksCounter : `${checkedTasksCounter} of ${tasksCounter}`}
          </span>
        </div>
      </div>
    </div>
  )
}