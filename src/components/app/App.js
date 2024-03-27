import Header from '../header/header';
import Intro from '../intro/intro';
import './App.css';

function App() {
  const slides = [
    { id: 1, image: 'https://shorturl.at/hkHQX', title: 'Yangiliklar Sarlavhasi 1', descr: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, ' },
    { id: 2, image: 'https://shorturl.at/ejrSW', title: 'Yangiliklar sarlavhasi 2', descr: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, ' },
  ];
  return (
    <div className="wrapper">
      <header className="header" id='header'>
        <Header/>
      </header>
      <main className="main">
        <section className='intro'>
          <Intro slides={slides}/>
        </section>
      </main>
      <footer className='footer'>
        <h1>Footer</h1>
      </footer>
    </div>
  );
}

export default App;
