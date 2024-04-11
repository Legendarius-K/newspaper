import styles from './CurrentArticle.module.css'

const CurrentArticle = ({article }) => {
    return (
        <div className={styles.currentArticle}>
            <h2>{article.headline}</h2>
            <p>{article.deck}</p>
        </div>
    )
};

export default CurrentArticle
