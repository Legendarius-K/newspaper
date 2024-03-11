import styles from "./MainArticle.module.css"
import { mockData } from "../../../data/data"
import MyImage from "../../../assets/ashes.jpeg"

const MainArticle = ({headline, deck, story, image, category}) => {
    return (
        <div className={styles.mainArticle}>
            <img src={MyImage} alt={headline} width="300px" height="auto"/>
            <h2>{mockData.headline} - {mockData.deck}</h2>
            <p>{mockData.story.slice(0, 200)}</p>
            <h5>Category: {mockData.category}</h5>
        </div>
    )
}

export default MainArticle