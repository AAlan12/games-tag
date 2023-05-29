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
        {favorite.length > 0 ? (
          favorite.map((fav) => <Card {...fav} key={fav.id} />)
        ) : (
          <p className={styles.empty}>Você não possuí favoritos.</p>
        )}
      </section>
    </>
  )
}
