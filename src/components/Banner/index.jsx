import styles from "./styles.module.css";

export const Banner = ({ img }) => {
  return (
    <div 
        className={styles.banner} 
        style={{ backgroundImage: `url('/banners/bn-${img}.jpg')`}}>
    </div>
  )
}
