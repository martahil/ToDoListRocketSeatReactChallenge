import { Header } from "./components/Header"
import { Input } from "./components/Input"

import styles from './App.module.css'
import './global.css'
import { Button } from "./components/Button"
import { PlusCircle } from "phosphor-react"

function App() {

  return (
    <main>
      <Header />

      <section>
        <div className={styles.createTaskDiv}>
          <Input className={styles.taskAddInput} />
          <Button className={styles.createBtn}>
            Create
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>
      </section>
    </main>
  )
}

export default App
