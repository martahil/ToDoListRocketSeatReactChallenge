import { Header } from "./components/Header"
import { Input } from "./components/Input"

import styles from './App.module.css'
import './global.css'
import { Button } from "./components/Button"

function App() {

  return (
    <main>
      <Header />

      <section>
        <div className={styles.createTaskDiv}>
          <Input className={styles.taskAddInput} />
          <Button className={styles.createBtn}>
            Create
          </Button>
        </div>
      </section>
    </main>
  )
}

export default App
