import styles from './CurrentArticle.module.css'

const CurrentArticle = ({article}) => {
    return (
        <div className={styles.currentArticle}>
            {article.headline}
        </div>
    )
};

export default CurrentArticle
