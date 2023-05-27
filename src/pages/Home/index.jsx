import styles from "./styles.module.css";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Title } from "../../components/Title";

export const Home = () => {
  return (
    <>
      <Header />
      <Banner img="home" />
      <Title>
        <h1>Um lugar para guardar seu jogos!</h1>
      </Title>
      <Footer />
    </>
  )
}
