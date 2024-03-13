import { remainingArticles } from '../../data/data';
import styles from './BreakingArticle.module.css'

const BreakingArticle = ({headline}) => {
    return (
        <div className={styles.breakingArticle}>
            <p>{headline}</p>
            <p className={styles.arrow}>&#8594;</p>
        </div>
        
    )
};

export default BreakingArticle
