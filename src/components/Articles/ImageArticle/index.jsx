import styles from "./ImageArticle.module.css"
import { getImageURL } from "../../../utils/functions"

const ImageArticle = ({image, headline, deck }) => {

    return (
        <div className={styles.imageArticle}>
            <img src={getImageURL(image)} alt={headline} width="100px" height="auto"/>
            <h4>{headline}</h4>
            <p>{deck}</p>
        </div>
    )
}

export default ImageArticle 