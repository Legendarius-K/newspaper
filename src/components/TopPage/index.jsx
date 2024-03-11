import MainArticle from "../Articles/MainArticle"
import ImageNews from "../ImageNews"
import RecentNews from "../RecentNews"
import styles from "./TopPage.module.css"

const TopPage = () => {
    return (
        <div className={styles.topPage}>
            <RecentNews />
            <MainArticle />
            <ImageNews />
        </div>
    )
}

export default TopPage