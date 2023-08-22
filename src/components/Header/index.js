import style from './Header.module.css'
/* eslint-disable jsx-a11y/anchor-has-content */
const Header = () => {
  return (
    <header className={style.header}>
      <span>MDFLIX</span>
      <nav>
        <a href="#">Home</a>
        <a href="#">Assistir</a>
      </nav>
    </header>
  )
}

export default Header;
