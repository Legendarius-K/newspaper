import styles from "./ImageArticle.module.css"
import { mockData, sportsArticles } from "../../../data/data"
import MyImage from "../../../assets/crime.jpeg"

const ImageArticle = ({image, headline, deck }) => {

    sportsArticles.map

    return (
        <div className={styles.imageArticle}>
            <img src={MyImage} alt={headline} width="100px" height="auto"/>
            <h4>{mockData.headline}</h4>
            <p>{mockData.deck}</p>
        </div>
    )
}

export default ImageArticle