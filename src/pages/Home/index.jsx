import styles from "./styles.module.css";
import { Banner } from "../../components/Banner";
import { Title } from "../../components/Title";
import { Card } from "../../components/Card";
import videos from '../../json/db.json';

export const Home = () => {
  return (
    <>
      <Banner img="home" />
      <Title>
        <h1>Um lugar para guardar seu jogos!</h1>
      </Title>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />
        })}
      </section>
    </>
  )
}
