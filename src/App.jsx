import { Header } from './components/Header'
import { Siderbar } from './components/Sidebar'
import { Post } from './components/Post'
import styles from "./App.module.css"
import './global.css'
import { Comment } from './components/Comment'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/cesarazambuja.png',
      name: 'César Azambuja',
      rule: 'Developer @Upsider'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-08-05 10:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      rule: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-08-03 10:00:00'),
  }
];

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Siderbar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}

        </main>
      </div>

    </div>

  )
}

