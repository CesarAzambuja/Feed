import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'



export function Post({ author, publishedAt, content }) {

    const [comments, setComments] = useState(['Post Muito bacana!']);
    const [newCommentText, setNewCommentText] = useState('')


    const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
    const publishedDateReativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })
    const isNewCommentEmpty = newCommentText.length === 0;

    function handleCreateNewComment() {
        event.preventDefault()

        setComments([...comments, newCommentText]);
        setNewCommentText('')
    }

    function HandleNewCommentChange() {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeleteOne);

    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.rule}</span>
                    </div>
                </div>
                <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>{publishedDateReativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type == 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type == 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixei se feedback</strong>
                <textarea
                    name='comment'
                    placeholder='Escreva seu comentário...'
                    value={newCommentText}
                    onChange={HandleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>

        </article>
    )
}

