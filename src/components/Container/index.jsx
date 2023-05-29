import styles from "./styles.module.css";

export const Container = ({ children }) => {
  return (
    <section className={styles.container}>
        {children}
    </section>
  )
}
