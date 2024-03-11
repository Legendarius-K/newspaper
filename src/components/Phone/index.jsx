import styles from "./Phone.module.css"

const Phone = ({number}) => {
    return (
        <div className={styles.phone}>
            <p className={styles.number} >{number}</p>
        </div>
    )
}

export default Phone