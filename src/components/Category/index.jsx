import styles from "./Category.module.css"
import ImageArticle from "../Articles/ImageArticle"
import { sportArticlesThree } from "../../data/data"

const Category = ({category, article}) => {
    return (
        <div className={styles.category}>
            <h2>{category}</h2>
            <div className={styles.categoryArticles}>
                {article}   
            </div>
        </div>
    )
}

export default Category 