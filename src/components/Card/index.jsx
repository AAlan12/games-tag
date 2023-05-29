import styles from "./styles.module.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useFavoriteContext } from "../../contexts/Favorites";

export const Card = ({ id, title, cover }) => {
  const { favorite, addFavorite } = useFavoriteContext();
  const isFavorite = favorite.some((fav) => fav.id === id);
  
  return (
    <div className={styles.container}>
      <img src={cover} alt={title} className={styles.cover} />
      <h2>{title}</h2>
      <div className={styles.fav} alt="Favorita filme">
          {isFavorite
            ? <AiFillHeart onClick={() => {
              addFavorite({ id, title, cover })
            }}/>
            : <AiOutlineHeart onClick={() => {
              addFavorite({ id, title, cover })
            }} />
          }
      </div>

    </div>
  )
}
