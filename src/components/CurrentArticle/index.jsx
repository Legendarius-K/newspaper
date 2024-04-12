import styles from './CurrentArticle.module.css'
import { getImageURL } from '../../utils/functions';

const CurrentArticle = ({ article, closeCurrentArticle }) => {

    const handleClick = () => {
        closeCurrentArticle(null)
    }

    return (
        <>
            <p onClick={handleClick} className={styles.backArrow}>&#x21a9;</p>
            <div className={styles.currentArticle}>
                <img src={getImageURL(article.image)} alt={article.headline} width='50%' />
                <article className={styles.article}>
                    <h2>{article.headline}</h2>
                    <p><span>{article.deck}</span></p>
                    <p>{article.story}</p>
                </article>
            </div>
        </>
    )
};

export default CurrentArticle


