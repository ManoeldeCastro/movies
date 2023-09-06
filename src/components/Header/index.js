import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logoImg from '../../assets/logo.png'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
            <span><img src={logoImg} alt="" /></span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/favorites">Favorites</Link>
                <Link to="/search">Search</Link>
                <Link to="/register">Register</Link>
            </nav>
        </header>
    )
}

export default Header;
