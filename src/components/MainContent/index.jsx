import styles from "./MainContent.module.css"
import TopPage from "../TopPage"
import Breaking from "../Breaking"
import Category from "../Category"
import { sportArticlesThree } from "../../data/data"
import { swedenArticlesThree } from "../../data/data"
import { crimeArticlesThree } from "../../data/data"
import { worldArticlesThree } from "../../data/data"
import { entertainmentArticlesThree } from "../../data/data"
import ImageArticle from "../Articles/ImageArticle"

const MainContent = () => {
    return (
        <section className={styles.mainContent}>
            <Breaking />
            <TopPage />
            <Category category="Sweden" article={swedenArticlesThree.map((article, index) =>  <ImageArticle key={index} {...article}/>)} />
            <Category category="Sports" article={sportArticlesThree.map((article, index) =>  <ImageArticle key={index} {...article}/>)} />
            <Category category="Crime" article={crimeArticlesThree.map((article, index) =>  <ImageArticle key={index} {...article}/>)} />
            <Category category="World" article={worldArticlesThree.map((article, index) =>  <ImageArticle key={index} {...article}/>)}/>
            <Category category="Entertainment" article={entertainmentArticlesThree.map((article, index) =>  <ImageArticle key={index} {...article}/>)}/>
        </section>
    )
}

export default MainContent