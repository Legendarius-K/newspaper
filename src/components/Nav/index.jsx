import styles from "./Nav.module.css"
import NavItem from "./NavItem"

const Nav = ({ setSelectedCategory, updateFunction }) => {
    return (
        <div className={styles.navbar}>
            <NavItem category="Home" setSelectedCategory={setSelectedCategory} updateFunction={updateFunction} />
            <NavItem category="World" setSelectedCategory={setSelectedCategory} updateFunction={updateFunction} />
            <NavItem category="Sweden" setSelectedCategory={setSelectedCategory} updateFunction={updateFunction} />
            <NavItem category="Crime" setSelectedCategory={setSelectedCategory} updateFunction={updateFunction} />
            <NavItem category="Entertainment" setSelectedCategory={setSelectedCategory} updateFunction={updateFunction} />
            <NavItem category="Sports" setSelectedCategory={setSelectedCategory} updateFunction={updateFunction} />
        </div>
    )
}

export default Nav 