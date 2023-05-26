import styles from "./styles.module.css";

export const Banner = ({ img }) => {
  return (
    <div 
        className={styles.banner} 
        style={{ backgroundImage: `url('../../../public/banners/bn-${img}.jpg')`}}>
    </div>
  )
}
