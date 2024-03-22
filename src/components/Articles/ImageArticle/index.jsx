import styles from "./ImageArticle.module.css"
import { getImageURL, getArticle  } from "../../../utils/functions"

const ImageArticle = ({image, headline, deck, updateFunction }) => {

    const handeClick = () => {
        updateFunction(getArticle(headline))
    }

    return (
        <div className={styles.imageArticle}>
            <img src={getImageURL(image)} alt={headline} width="100px" height="auto"/>
            <h4 onClick={handeClick} >{headline}</h4>
            <p>{deck}</p>
        </div>
    )
}

export default ImageArticle 