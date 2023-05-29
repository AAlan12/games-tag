import styles from "./styles.module.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useFavoriteContext } from "../../contexts/Favorites";

export const Card = ({ id, title, cover }) => {
  const { favorite, stateFavorite } = useFavoriteContext();
  const isFavorite = favorite.some((fav) => fav.id === id);
  
  return (
    <div className={styles.container}>
      <img src={cover} alt={title} className={styles.cover} />
      <h2>{title}</h2>
      <div className={styles.fav} alt="Favorita filme">
          {isFavorite
            ? <AiFillHeart onClick={() => {
              stateFavorite({ id, title, cover })
            }}/>
            : <AiOutlineHeart onClick={() => {
              stateFavorite({ id, title, cover })
            }} />
          }
      </div>

    </div>
  )
}
