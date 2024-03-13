import styles from "./Phone.module.css"

const Phone = ({number}) => {
    return (
        <div className={styles.phone}>
            <p>&#128222;</p>
            <p className={styles.number} >{number}</p>
        </div>
    )
}

export default Phone