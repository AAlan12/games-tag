import styles from "./styles.module.css";
import { Banner } from "../../components/Banner";
import { Title } from "../../components/Title";
import { Card } from "../../components/Card";
import { useFavoriteContext } from "../../contexts/Favorites";

export const Favorites = () => {
  const { favorite } = useFavoriteContext();
  return (
    <>
        <Banner img="fav" />
        <Title>
            <h1>Meus Favoritos</h1>
        </Title>
        <section className={styles.container}>
            {favorite.map((fav) => {
              return <Card {...fav} key={fav.id} />
            })}
        </section>
    </>
  )
}
