import styles from './NavItem.module.css'

const NavItem = ({ category, setSelectedCategory }) => {

    const handleClick = () => {
        {category=== "Home" ? setSelectedCategory(null) : setSelectedCategory(category.toLowerCase())}
    }

    return (
            <li onClick={handleClick} className={styles.navItem}>{category}</li>
    )
};

export default NavItem
