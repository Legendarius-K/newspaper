import styles from "./MainArticle.module.css"
import { getImageURL } from "../../../utils/functions"


const MainArticle = ({headline, deck, story, category, image}) => {
    return (
        <div className={styles.mainArticle}>
            <img src={getImageURL(image)} alt={headline} width="300px" height="auto"/>
            <h2>{headline} - {deck}</h2>
            <p>{story.slice(0, 300)}</p>
            <h5>Category: {category}</h5>
        </div>
    )
}

export default MainArticle