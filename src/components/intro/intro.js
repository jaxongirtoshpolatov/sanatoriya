import "./intro.css";
import next from "./images/right.svg";
import { useState, useEffect } from "react";

function Intro({ slides }) {
  const [count, setCount] = useState(0);

  const nextSlide = () => {
    setCount((prevCount) => (prevCount + 1) % slides.length);
  };

  const prevSlide = () => {
    setCount((prevCount) => (prevCount - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000); // 5 sekunddan so'ng keyingi slaydga o'tish
    return () => clearTimeout(timer); // Komponent unmont bo'lganda timeout ni to'xtatish
  }, [count]);

  return (
    <div className="slider__wrapper">
      {slides.map((item, index) => {
        return (
          <div
            className={count === index ? "slider fade-in " : "slider hidden"}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="slide" key={item.id}>
              <h1 className="slide__title">{item.title}</h1>
              <p className="slide__descr">{item.descr}</p>
              <button className="slide__more_btn">Batafsil</button>
            </div>
            <div className="slide__btns">
              <img
                src={next}
                alt="next icon"
                className="prev__icon arrow__icon"
                onClick={prevSlide}
              />
              <img
                src={next}
                alt="next icon"
                className="next__icon arrow__icon"
                onClick={nextSlide}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Intro;
