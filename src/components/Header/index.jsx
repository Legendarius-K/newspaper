import styles from "./Header.module.css"
import Social from "../Social"
import Phone from "../Phone"

const Header = ({title}) => {
    return (
        <header className={styles.header}>
            <Social />
            <h1>{title}</h1>
            <Phone number="070070070" />
        </header>
    )
}

export default Header