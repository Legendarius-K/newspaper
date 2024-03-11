import styles from "./MainContent.module.css"
import TopPage from "../TopPage"
import Breaking from "../Breaking"
import Category from "../Category"

const MainContent = () => {
    return (
        <section className={styles.mainContent}>
            <Breaking />
            <TopPage />
            <Category category="International" />
            <Category category="Sports" />
            <Category category="Entertainment" />
            <Category category="Economics" />
        </section>
    )
}

export default MainContent