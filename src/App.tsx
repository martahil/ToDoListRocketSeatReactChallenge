import { Header } from "./components/Header"
import { Input } from "./components/Input"

import styles from './App.module.css'
import './global.css'

function App() {

  return (
    <main>
      <Header />

      <section>
        <div className={styles.createTaskDiv}>
          <Input className={styles.taskAddInput}/>
        </div>
      </section>
    </main>
  )
}

export default App
