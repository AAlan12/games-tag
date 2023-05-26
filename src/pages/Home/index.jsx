import styles from "./styles.module.css";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";

export const Home = () => {
  return (
    <>
      <Header />
      <Banner img="home" />
      <Footer />
    </>
  )
}
