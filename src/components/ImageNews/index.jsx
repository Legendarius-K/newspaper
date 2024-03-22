
import { sportsArticles } from "../../data/data"
import { sportArticlesTwo } from "../../data/data"
import ImageArticle from "../Articles/ImageArticle"
import styles from "./ImageNews.module.css"

const ImageNews = ({updateFunction}) => {

    return (
        <div className={styles.imageNews}>
            {sportArticlesTwo.map((article, index) =>  <ImageArticle key={index} {...article} updateFunction={updateFunction} />)}
        </div>
    )
}

export default ImageNews 