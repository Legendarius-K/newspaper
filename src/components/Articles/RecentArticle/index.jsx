import styles from "./RecentArticle.module.css"
import MyImage from "../../../assets/ashes.jpeg"
import { getArticle } from "../../../utils/functions"

const RecentArticle = ({headline, deck, story, image, category, updateFunction}) => {

    const handeClick = () => {
        updateFunction(getArticle(headline))
    }


    return (
        <div className={styles.recentArticle}>
            <p onClick={handeClick}><span>{story.slice(0, 94)}</span></p>
            <h5>Category: {category}</h5>
        </div>
    )
}

export default RecentArticle