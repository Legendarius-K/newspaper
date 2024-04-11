import styles from "./Nav.module.css"
import NavItem from "./NavItem"
import hamburger from '../../assets/hamburger-menu.png'
import { useState } from "react"

const Nav = ({ setSelectedCategory, updateFunction }) => {
    const [showBurger, setShowBurger] = useState(false)

    const handleClick = () => {
        setShowBurger(!showBurger)
    }

    return (
        <>
            <div className={styles.nav}>
                <div className={styles.navbarContainer}>
                    <img onClick={handleClick} className={`${styles.hamburgerImg} ${showBurger && styles.spin}`} src={hamburger} alt="hamburger-menu" width={"28px"} />
                    <div onClick={handleClick} className={`${styles.overlay} ${showBurger && styles.showOverlay}`}></div>
                    <div className={styles.navbar}>
                        <NavItem category="Home" setSelectedCategory={setSelectedCategory} updateFunction={updateFunction} />
                        <NavItem category="World" setSelectedCategory={setSelectedCategory} updateFunction={updateFunction} />
                        <NavItem category="Sweden" setSelectedCategory={setSelectedCategory} updateFunction={updateFunction} />
                        <NavItem category="Crime" setSelectedCategory={setSelectedCategory} updateFunction={updateFunction} />
                        <NavItem category="Entertainment" setSelectedCategory={setSelectedCategory} updateFunction={updateFunction} />
                        <NavItem category="Sports" setSelectedCategory={setSelectedCategory} updateFunction={updateFunction} />
                    </div>
                </div>
                <div className={`${styles.hamburger} ${showBurger && styles.visible}`}>
                    <NavItem category="Home" setSelectedCategory={setSelectedCategory} updateFunction={updateFunction} hideBurger={setShowBurger} />
                    <NavItem category="World" setSelectedCategory={setSelectedCategory} updateFunction={updateFunction} hideBurger={setShowBurger} />
                    <NavItem category="Sweden" setSelectedCategory={setSelectedCategory} updateFunction={updateFunction} hideBurger={setShowBurger} />
                    <NavItem category="Crime" setSelectedCategory={setSelectedCategory} updateFunction={updateFunction} hideBurger={setShowBurger} />
                    <NavItem category="Entertainment" setSelectedCategory={setSelectedCategory} updateFunction={updateFunction} hideBurger={setShowBurger} />
                    <NavItem category="Sports" setSelectedCategory={setSelectedCategory} updateFunction={updateFunction} hideBurger={setShowBurger} />
                </div>
            </div>

        </>
    )
}

export default Nav  