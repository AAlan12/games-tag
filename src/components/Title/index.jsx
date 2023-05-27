import styles from "./styles.module.css";

export const Title = ({ children }) => {
  return (
    <div className={styles.title}>
        {children}
    </div>
  )
}
