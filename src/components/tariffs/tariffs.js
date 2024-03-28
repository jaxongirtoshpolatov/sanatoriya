import "./tariffs.css";
import check from "./images/check-mark.png";
import cross from "./images/cross.png";

const Tariffs = () => {
  return (
    <section className="tariffs">
      <div className="container tariffs__contaianer">
        <h4 className="tariffs__main_title">Tarifflar</h4>
        <div className="tariffs__cards">
          <div className="tariffs__card">
            <h1 className="tariffs__title">Tariff sarlavhasi</h1>
            <div className="tariffs__price">
              <span>$99</span>/month
            </div>
            <div className="tariffs__options">
              <ul className="option__menu d-flex">
                <li className="option__item d-flex">
                  <img src={check} alt="check icon" />
                  <p>Chiroyli dizayn</p>
                </li>
                <li className="option__item d-flex">
                  <img src={check} alt="check icon" />
                  <p>Qulay sharoitlar</p>
                </li>
                <li className="option__item d-flex">
                  <img src={check} alt="check icon" />
                  <p>Hamshiralar xizmati 24/7</p>
                </li>
                <li className="option__item d-flex">
                  <img src={check} alt="check icon" />
                  <p>Manaviy xordiq</p>
                </li>
              </ul>
              <button className="tariffs__button">Sotib olish</button>
            </div>
          </div>
          <div className="tariffs__card">
            <h1 className="tariffs__title">Tariff sarlavhasi</h1>
            <div className="tariffs__price">
              <span>$99</span>/month
            </div>
            <div className="tariffs__options">
              <ul className="option__menu d-flex">
                <li className="option__item d-flex">
                  <img src={check} alt="check icon" />
                  <p>Chiroyli dizayn</p>
                </li>
                <li className="option__item d-flex">
                  <img src={check} alt="check icon" />
                  <p>Qulay sharoitlar</p>
                </li>
                <li className="option__item d-flex">
                  <img src={check} alt="check icon" />
                  <p>Hamshiralar xizmati 24/7</p>
                </li>
                <li className="option__item d-flex">
                  <img src={cross} alt="check icon" />
                  <p>Manaviy xordiq</p>
                </li>
              </ul>
              <button className="tariffs__button">Sotib olish</button>
            </div>
          </div>
          <div className="tariffs__card">
            <h1 className="tariffs__title">Tariff sarlavhasi</h1>
            <div className="tariffs__price">
              <span>$99</span>/month
            </div>
            <div className="tariffs__options">
              <ul className="option__menu d-flex">
                <li className="option__item d-flex">
                  <img src={check} alt="check icon" />
                  <p>Chiroyli dizayn</p>
                </li>
                <li className="option__item d-flex">
                  <img src={check} alt="check icon" />
                  <p>Qulay sharoitlar</p>
                </li>
                <li className="option__item d-flex">
                  <img src={cross} alt="check icon" />
                  <p>Hamshiralar xizmati 24/7</p>
                </li>
                <li className="option__item d-flex">
                  <img src={cross} alt="check icon" />
                  <p>Manaviy xordiq</p>
                </li>
              </ul>
              <button className="tariffs__button">Sotib olish</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tariffs;
