import styles from "./Footer.module.css"
import Social from "../Social"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.topContainer}>
                <div className={styles.info}>
                    <h3>News For Today</h3>
                    <p>News For Today delivers comprehensive coverage of global events, politics, technology, entertainment, and lifestyle.</p>
                </div>
                <div className={styles.getNews}>
                    <h4>Get News</h4>
                    <p>Home</p>
                    <p>National</p>
                    <p>Sports</p>
                    <p>Weather</p>
                </div>
                <div className={styles.company}>
                    <h4>Company</h4>
                    <p>About Us</p>
                    <p>Writers List</p>
                    <p>Policy</p>
                    <p>Teams</p>
                    <p>Contact Us</p>
                </div>
                <div className={styles.subscribe}>
                    <h4>Subscribe</h4>
                    <input className={styles.input} type="text" name="" id="" placeholder="First Name"/>
                    <input className={styles.input} type="text" name="" id="" placeholder="Password"/>
                    <button>SUBSCRIBE</button>
                </div>
            </div>
            <div className={styles.bottomContainer}>
                <p>Copyright @Darius 2024</p>
                <div className={styles.legal}>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>Legal</p>
                </div>
                <Social />
            </div>

        </footer>
    )
}

export default Footer