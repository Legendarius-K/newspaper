import styles from "./Social.module.css"
import insta from "../../assets/insta.svg"
import facebook from "../../assets/facebook.svg"
import twitter from "../../assets/twitter.svg"
import snap from "../../assets/snap.svg"

const Social = () => {
    return (
        <div className={styles.social}>
            <img src={facebook} alt="facebook logo" width="20px" height="20px"/>
            <img src={insta} alt="insta logo" width="20px" height="20px"/>
            <img src={snap} alt="snap logo" width="20px" height="20px"/>
            <img src={twitter} alt="twitter logo" width="20px" height="20px"/>
        </div>
    )
}

export default Social