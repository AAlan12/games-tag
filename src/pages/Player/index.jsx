import styles from "./styles.module.css";
import videos from '../../json/db.json';
import { Banner } from "../../components/Banner"
import { Title } from "../../components/Title";
import { useParams } from "react-router-dom";

export const Player = () => {
    const params = useParams();
    const video = videos.find((video) => {
        return video.id === Number(params.id);
    })

    return (
        <>
            <Banner img="player" />
            <Title>
                <h1>Player</h1>
            </Title>
            <section className={styles.container}>
                <iframe width="100%" height="315" src={video.link} title={video.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>  
            </section>
        </>
    )
}
