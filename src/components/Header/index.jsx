import styles from "./Header.module.css"
import Social from "../Social"
import Phone from "../Phone"

const Header = ({title}) => {
    return (
        <header className={styles.header}>
            <Social />
            <h1>{title}</h1>
            <Phone number="+420(0)70070" />
        </header>
    )
}

export default Header