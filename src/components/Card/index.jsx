import styles from "./styles.module.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export const Card = ({ id, title, cover }) => {
  return (
    <div className={styles.container}>
        <img src={cover} alt={title} className={styles.cover} />
        <h2>{title}</h2>
        <AiOutlineHeart className={styles.fav} />
    </div>
  )
}
