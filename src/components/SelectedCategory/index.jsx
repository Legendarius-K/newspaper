import MainArticle from '../Articles/MainArticle';
import Category from '../Category';
import styles from './SelectedCategory.module.css'


const SelectedCategory = ({ category, updateFunction }) => {
    return (
        <div className={styles.categoryArticle}>
            {category.map((article, index) => <MainArticle updateFunction={updateFunction} key={index} {...article}/>)}
        </div>
    )
};

export default SelectedCategory
