import { remainingArticles } from '../../data/data';
import styles from './BreakingArticle.module.css'

const BreakingArticle = ({headline, deck}) => {
    return (
        <div className={styles.breakingArticle}>
            <p>{headline}: {deck}</p>
            <p className={styles.arrow}>&#8594;</p>
        </div>
        
    )
};

export default BreakingArticle
