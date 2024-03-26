import './header.css'

function Header() {
  return (
    <div className="container header__container d-flex">
        {/* brand logo */}
        <a href="#!" className="brand__logo">Sangardak sanatoriya</a>
        <nav className='nav d-flex'>
            <ul className="nav__menu d-flex">
                <li className="nav__item"><a href="#!" className="nav__link">Bosh sahifa</a></li>
                <li className="nav__item"><a href="#!" className="nav__link">Tariff</a></li>
                <li className="nav__item"><a href="#!" className="nav__link">Xizmatlar</a></li>
                <li className="nav__item"><a href="#!" className="nav__link">Biz haqimizda</a></li>
                <li className="nav__item"><a href="#!" className="nav__link">Rahbariyat</a></li>
            </ul>
            <div className="hamburger__menu d-flex close">
                <div className="bars__icon"></div>
            </div>
        </nav>
    </div>
  )
}

export default Header