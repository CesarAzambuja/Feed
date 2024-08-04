import { Header } from './components/Header'
import { Siderbar } from './components/Sidebar'
import { Post } from './components/Post'
import styles from "./App.module.css"
import './global.css'
import { Comment } from './components/Comment'



export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Siderbar />
        <main>
          <Post
            author="César Azambuja"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda delectus voluptatem vitae accusantium natus quaerat temporibus earum iure est quisquam exercitationem, asperiores illum, dicta expedita, pariatur eaque sint quam corporis."
          />
          <Post
            author="César Azambuja"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda delectus voluptatem vitae accusantium natus quaerat temporibus earum iure est quisquam exercitationem, asperiores illum, dicta expedita, pariatur eaque sint quam corporis."

          />

        </main>
      </div>

    </div>

  )
}

