import styles from "./Nav.module.css"
import NavItem from "../NavItem"

const Nav = () => {
    return (
        <div className={styles.navbar}>
            <NavItem />
        </div>
    )
}

export default Nav