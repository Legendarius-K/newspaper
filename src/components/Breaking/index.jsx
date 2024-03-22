import styles from "./Breaking.module.css"
import { mockData } from "../../data/data"
import { shuffledFilteredArticles } from "../../data/data"
import { remainingArticles } from "../../data/data"
import BreakingArticle from "../BreakingArticle"

const Breaking = ({updateFunction}) => {
    return (
        <div className={styles.breaking}>
            <h4 className={styles.breakingHeadline}>Breaking News</h4>
            <div className={styles.breakingArticles}>
                {remainingArticles.map((article, index) => <BreakingArticle updateFunction={updateFunction} key={index} {...article} />)}
            </div>
        </div>
    )
}

export default Breaking