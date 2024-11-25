import { ClipboardText } from 'phosphor-react'
import styles from './Empty.module.css'

export function Empty() {
  return (
    <div className={styles.emptyDiv}>
      <div className={styles.grayLine}></div>
      <ClipboardText className={styles.clipboardIcon} />
      <p className={styles.topP}>You do not have any tasks added yet</p>
      <p className={styles.bottomP}>Create tasks and organize your to-do items</p>
    </div>
  );
}