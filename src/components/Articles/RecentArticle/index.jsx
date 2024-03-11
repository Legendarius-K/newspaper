import styles from "./RecentArticle.module.css"
import { mockData } from "../../../data/data"
import MyImage from "../../../assets/ashes.jpeg"

const RecentArticle = ({headline, deck, story, image, category}) => {
    return (
        <div className={styles.recentArticle}>
            <p><span>{mockData.story.slice(0, 94)}</span></p>
            <h5>Category: {mockData.category}</h5>
        </div>
    )
}

export default RecentArticle