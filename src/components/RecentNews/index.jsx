import RecentArticle from "../Articles/RecentArticle"
import styles from "./RecentNews.module.css"

const RecentNews = () => {
    return (
        <div className={styles.recent}>
            <h3>Recent News</h3>
            <RecentArticle />
            <RecentArticle />
            <RecentArticle />
            <RecentArticle />
        </div>
    )
}

export default RecentNews