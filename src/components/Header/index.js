import style from './Header.module.css'
import logoImg from '../../assets/logo.png'
import { Link } from 'react-router-dom';

/* eslint-disable jsx-a11y/anchor-has-content */
const Header = () => {
  return (
    <header className={style.header}>
      <Link to="/">
        <span>
          <img src={logoImg} alt="" />
        </span>
      </Link>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/watch"}>Watch</Link>
        <Link to={"/search"}>Search</Link>
      </nav>
    </header>
  )
}

export default Header;
