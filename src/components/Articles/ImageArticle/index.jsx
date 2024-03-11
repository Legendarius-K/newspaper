import styles from "./ImageArticle.module.css"
import { mockData } from "../../../data/data"
import MyImage from "../../../assets/crime.jpg"

const ImageArticle = ({image, headline, deck }) => {
    return (
        <div className={styles.imageArticle}>
            <img src={MyImage} alt={headline} width="100px" height="auto"/>
            <h4>{mockData.headline}</h4>
            <p><span>{mockData.deck}</span></p>
        </div>
    )
}

export default ImageArticle