import style from './Header.module.css'
import logoImg from '../../assets/logo.png'

/* eslint-disable jsx-a11y/anchor-has-content */
const Header = () => {
  return (
    <header className={style.header}>
      <span><img src={logoImg} alt="" /></span>
      <nav>
        <a href="#">Home</a>
        <a href="#">Assistir</a>
      </nav>
    </header>
  )
}

export default Header;
