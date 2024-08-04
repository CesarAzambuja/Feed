import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/62890582?v=4" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>César Azambuja</strong>
                            <time title='11 de Agosto de 2024' dateTime="2024-008-03 08:13:00">Cerca de 1h atrás.</time>
                        </div>
                        <button title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>

                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>22</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}