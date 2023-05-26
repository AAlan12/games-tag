import styles from "./styles.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.header}>
        <Link>
            <img src={logo} alt="Logo do games tag" />
        </Link>
        <nav>

        </nav>
    </header>
  )
}
