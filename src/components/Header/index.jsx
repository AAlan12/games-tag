import styles from "./styles.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { HeaderLink } from "../HeaderLink";

export const Header = () => {
  return (
    <header className={styles.header}>
        <Link>
            <img className={styles.logo} src={logo} alt="Logo do games tag" />
        </Link>
        <nav>
            <HeaderLink url="./">
              Home
            </HeaderLink>
            <HeaderLink url="./Favorites">
              Favoritos
            </HeaderLink>
        </nav>
    </header>
  )
}
