import styles from './NavItem.module.css'

const NavItem = ({ category, setSelectedCategory, updateFunction }) => {

    const handleClick = () => {
        {category=== "Home" ? setSelectedCategory(null) : setSelectedCategory(category.toLowerCase())}
        updateFunction(null)
    }

    return (
            <li onClick={handleClick} className={styles.navItem}>{category}</li>
    )
};

export default NavItem
 