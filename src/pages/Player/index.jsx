import styles from "./styles.module.css";
import { Banner } from "../../components/Banner"
import { Title } from "../../components/Title";
import { useParams } from "react-router-dom";
import { NotFound } from "../NotFound";
import { useState, useEffect } from "react";

export const Player = () => {
    const [video, setVideo] = useState();
    const params = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/AAlan12/games-tag-api/videos?id=${params.id}`)
        .then(response => response.json())
        .then(data => {
          setVideo(...data)
        })
      }, [])

    if(!video) {
        return <NotFound />
    }

    return (
        <>
            <Banner img="player" />
            <Title>
                <h1>{video.title}</h1>
            </Title>
            <section className={styles.container}>
                <iframe width="100%" height="315" src={video.link} title={video.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>  
            </section>
        </>
    )
}
