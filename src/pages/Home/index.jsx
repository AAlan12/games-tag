import styles from "./styles.module.css";
import { Banner } from "../../components/Banner";
import { Title } from "../../components/Title";
import { Card } from "../../components/Card";
import { useEffect, useState } from "react";

export const Home = () => {
  const [videos,setVideos] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/AAlan12/games-tag-api/videos')
    .then(response => response.json())
    .then(data => {
      setVideos(data)
    })
  }, [])

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
