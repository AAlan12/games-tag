import styles from "./styles.module.css";

export const NotFound = () => {
  return (
    <section className={styles.container}>
        <h2>Ops!</h2>
        <p>O conteúdo que você procura não foi encontrada!</p>
    </section>
  )
}
