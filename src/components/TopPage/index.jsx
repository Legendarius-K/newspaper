import MainArticle from "../Articles/MainArticle"
import ImageNews from "../ImageNews"
import RecentNews from "../RecentNews"
import styles from "./TopPage.module.css"
import { mainArticle } from "../../data/data"

const TopPage = () => {
    return (
        <div className={styles.topPage}>
            <RecentNews />
            <MainArticle {...mainArticle}/>
            <ImageNews />
        </div>
    )
}

export default TopPage