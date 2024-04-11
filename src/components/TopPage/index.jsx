import MainArticle from "../Articles/MainArticle"
import ImageNews from "../ImageNews"
import RecentNews from "../RecentNews"
import styles from "./TopPage.module.css"
import { mainArticle } from "../../data/data"

const TopPage = ({ updateFunction }) => {
    return (
        <div className={styles.topPage}>
            <RecentNews updateFunction={updateFunction} />
            <MainArticle className={styles.topPageMain} updateFunction={updateFunction} {...mainArticle}/>
            <ImageNews updateFunction={updateFunction}/>
        </div>
    )
}

export default TopPage 