import { Check, Trash } from 'phosphor-react'
import { ITask } from '../App'

import styles from './TaskItem.module.css'

interface Props {
  data: ITask
  removeTask: (id: number) => void
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void
}

export function TaskItem({ data, removeTask, toggleTaskStatus }: Props) {
  function handleTaskToggle() {
    toggleTaskStatus({ id: data.id, value: !data.isChecked })
  }

  function handleRemove() {
    removeTask(data.id)
  }

  const checkboxCheckedClassName = data.isChecked
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked']
  const paragraphCheckedClassName = data.isChecked
    ? styles['paragraph-checked']
    : ''

  return (
    <div className={styles.individualTask}>
      <div className={styles.taskTxt}>
        <label htmlFor="checkbox" onClick={handleTaskToggle}>
          <div className={styles.checkboxAndTxt}>
            <input readOnly type="checkbox" checked={data.isChecked} />

            <span className={`${styles.checkbox} ${checkboxCheckedClassName}`}>
              <Check size={12} /> {/* The data.isChecked && was removed to show the ✔️ on hover */}
            </span>
          </div>
          <p className={`${styles.paragraph} ${paragraphCheckedClassName}`}>
            {data.text}
          </p>
        </label>
      </div>

      <button onClick={handleRemove} className={styles.deleteButton}>
        <Trash size={16} />
      </button>
    </div>
  )
}