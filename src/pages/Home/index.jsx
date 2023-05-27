import styles from "./styles.module.css";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Title } from "../../components/Title";
import { Card } from "../../components/Card";

export const Home = () => {
  return (
    <>
      <Header />
      <Banner img="home" />
      <Title>
        <h1>Um lugar para guardar seu jogos!</h1>
      </Title>
      <Card id='1' title="Alan" cover="https://avatars.githubusercontent.com/u/70543343?v=4" />
      <Footer />
    </>
  )
}
