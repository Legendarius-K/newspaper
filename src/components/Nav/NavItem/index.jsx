import styles from './NavItem.module.css'

const NavItem = ({ category, setSelectedCategory, updateFunction, hideBurger }) => {

    const handleClick = () => {
        {category=== "Home" ? setSelectedCategory(null) : setSelectedCategory(category.toLowerCase())}
        updateFunction(null)
        hideBurger(false)
    }

    return (
            <li onClick={handleClick} className={styles.navItem}>{category}</li>
    )
};

export default NavItem
 