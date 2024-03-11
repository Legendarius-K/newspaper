import styles from "./Category.module.css"
import ImageArticle from "../Articles/ImageArticle"

const Category = ({category}) => {
    return (
        <div className={styles.category}>
            <h2>{category}</h2>
            <div className={styles.categoryArticles}>
                <ImageArticle />
                <ImageArticle />
                <ImageArticle />
            </div>
        </div>
    )
}

export default Category