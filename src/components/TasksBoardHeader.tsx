import styles from './TasksBoardHeader.module.css'

export function TasksBoardHeader() {
  return (
    <div className={styles.boardHeader}>
      <div className={styles.createdAndCompletedTasks}>
        <div className={styles.createdTasksDiv}>
          <span className={styles.createdTasksTxt}>Created tasks</span>
          <span className={styles.createdTasksCounter}>5</span>
        </div>

        <div className={styles.completedTasksDiv}>
          <span className={styles.completedTasksTxt}>Completed tasks</span>
          <span className={styles.completedTasksCounter}>2 of 5</span>
        </div>
      </div>
    </div>
  )
}