import { useState } from 'react'
import './header.css'

function Header() {

    const [status, setStatus] = useState(false);

    const humburger = () => {
        if(status){
            setStatus(false)
        }else{
            setStatus(true)
        }
    }


  return (
    <div className="container header__container d-flex">
        {/* brand logo */}
        <a href="#!" className='brand__logo'>Sangardak sanatoriya</a>
        <nav className='nav d-flex'>
            <ul className={status ? `nav__menu d-flex visible` : `nav__menu d-flex`}>
                <li className="nav__item"><a href="#header" className="nav__link" onClick={humburger}>Bosh sahifa</a></li>
                <li className="nav__item"><a href="#!" className="nav__link" onClick={humburger}>Tariff</a></li>
                <li className="nav__item"><a href="#!" className="nav__link" onClick={humburger}>Xizmatlar</a></li>
                <li className="nav__item"><a href="#!" className="nav__link" onClick={humburger}>Biz haqimizda</a></li>
                <li className="nav__item"><a href="#!" className="nav__link" onClick={humburger}>Rahbariyat</a></li>
            </ul>
                <div className={status ? `bars__icon d-flex active` : `bars__icon d-flex`} onClick={humburger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
        </nav>
    </div>
  )
}

export default Header