import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const HeaderLink = ({ url, children }) => {
  return (
    <Link to={url} className={styles.link}>
        {children}
    </Link>
  )
}
