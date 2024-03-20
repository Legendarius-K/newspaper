import styles from "./Nav.module.css"
import NavItem from "./NavItem"

const Nav = ({ setSelectedCategory }) => {
    return (
        <div className={styles.navbar}>
            <NavItem category="Home" setSelectedCategory={setSelectedCategory} />
            <NavItem category="World" setSelectedCategory={setSelectedCategory} />
            <NavItem category="Sweden" setSelectedCategory={setSelectedCategory}/>
            <NavItem category="Crime" setSelectedCategory={setSelectedCategory}/>
            <NavItem category="Entertainment" setSelectedCategory={setSelectedCategory}/>
            <NavItem category="Sports" setSelectedCategory={setSelectedCategory}/>
        </div>
    )
}

export default Nav