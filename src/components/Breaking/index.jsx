import styles from "./Breaking.module.css"
import { mockData } from "../../data/data"

const Breaking = () => {
    return (
        <div className={styles.breaking}>
            <h4 className={styles.breakingHeadline}>Breaking News</h4>
            <div className={styles.breakingArticles}>
                <p className={styles.breakingArticle}>{mockData.headline.slice(0, 14)}: {mockData.deck.slice(0, 31)}</p>
                <p className={styles.arrow}>&#10132;</p>
                <p className={styles.breakingArticle}>{mockData.headline.slice(0, 14)}: {mockData.deck.slice(0, 31)}</p>
                <p className={styles.arrow}>&#10132;</p>
                <p className={styles.breakingArticle}>{mockData.headline.slice(0, 14)}: {mockData.deck.slice(0, 31)}</p>
                <p className={styles.arrow}>&#10132;</p>
                <p className={styles.breakingArticle}>{mockData.headline.slice(0, 14)}: {mockData.deck.slice(0, 31)}</p>
                <p className={styles.arrow}>&#10132;</p>
                <p className={styles.breakingArticle}>{mockData.headline.slice(0, 14)}: {mockData.deck.slice(0, 31)}</p>
                <p className={styles.arrow}>&#10132;</p>
                <p className={styles.breakingArticle}>{mockData.headline.slice(0, 14)}: {mockData.deck.slice(0, 31)}</p>
            </div>
        </div>
    )
}

export default Breaking