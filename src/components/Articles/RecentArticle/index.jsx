import styles from "./RecentArticle.module.css"
import MyImage from "../../../assets/ashes.jpeg"

const RecentArticle = ({headline, deck, story, image, category}) => {
    return (
        <div className={styles.recentArticle}>
            <p><span>{story.slice(0, 94)}</span></p>
            <h5>Category: {category}</h5>
        </div>
    )
}

export default RecentArticle