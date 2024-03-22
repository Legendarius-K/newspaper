import { remainingArticles } from '../../data/data';
import styles from './BreakingArticle.module.css'
import { getArticle } from '../../utils/functions';

const BreakingArticle = ({headline, deck, updateFunction}) => {

    const handeClick = () => {
        updateFunction(getArticle(headline))
    }


    return (
        <div onClick={handeClick} className={styles.breakingArticle}>
            <p>{headline}: {deck}</p>
            <p className={styles.arrow}>&#8594;</p>
        </div>
        
    )
};

export default BreakingArticle
