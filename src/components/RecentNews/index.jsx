import RecentArticle from "../Articles/RecentArticle"
import styles from "./RecentNews.module.css"
import { filteredFourArticles } from "../../data/data"
import { recentArticles } from "../../data/data"

const RecentNews = ({article, updateFunction}) => {
    return (
        <div className={styles.recent}>
            <h3>Recent News</h3>
            
            {recentArticles.map((article, index) => <RecentArticle updateFunction={updateFunction}  key={index} {...article}/>)}
        </div>
    )
}

export default RecentNews