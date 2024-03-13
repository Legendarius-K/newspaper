
import ImageArticle from "../Articles/ImageArticle"
import styles from "./ImageNews.module.css"

const ImageNews = () => {
    return (
        <div className={styles.imageNews}>
            <ImageArticle />
            <ImageArticle />
        </div>
    )
}

export default ImageNews 