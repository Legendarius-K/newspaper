import MainArticle from '../Articles/MainArticle';
import Category from '../Category';
import styles from './SelectedCategory.module.css'


const SelectedCategory = ({ category }) => {
    return (
        <div className={styles.categoryArticle}>
            {category.map((article, index) => <MainArticle key={index} {...article}/>)}
        </div>
    )
};

export default SelectedCategory
