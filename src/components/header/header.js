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

    const closed = () => {
        setStatus(false)
    }


  return (
    <div className="container header__container d-flex ">
        {/* brand logo */}
        <a href="#!" className='brand__logo'>Sangardak sanatoriya</a>
        <nav className='nav d-flex'>
            <ul className={status ? `nav__menu d-flex visible` : `nav__menu d-flex `}>
                <li className="nav__item"><a href="#intro" className="nav__link" onClick={closed}>Bosh sahifa</a></li>
                <li className="nav__item"><a href="#tariffs" className="nav__link" onClick={closed}>Tariff</a></li>
                <li className="nav__item"><a href="#!" className="nav__link" onClick={closed}>Xizmatlar</a></li>
                <li className="nav__item"><a href="#!" className="nav__link" onClick={closed}>Biz haqimizda</a></li>
                <li className="nav__item"><a href="#!" className="nav__link" onClick={closed}>Rahbariyat</a></li>
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