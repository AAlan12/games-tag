import styles from "./styles.module.css";
import { Banner } from "../../components/Banner";
import { Title } from "../../components/Title";
import { Card } from "../../components/Card";

export const Favorites = () => {
  return (
    <>
        <Banner img="fav" />
        <Title>
            <h1>Meus Favoritos</h1>
        </Title>
        <section className={styles.container}>
            <Card id="1" title="Persona 3" cover="https://cdn.akamai.steamstatic.com/steam/apps/1809700/header.jpg?t=1679398544" />
        </section>
    </>
  )
}
