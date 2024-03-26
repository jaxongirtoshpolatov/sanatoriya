import Header from '../header/header';
import Intro from '../intro/intro';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <header className="header" id='header'>
        <Header/>
      </header>
      <main className="main">
        <section className='intro'>
          <Intro/>
        </section>
      </main>
      <footer className='footer'>
        <h1>Footer</h1>
      </footer>
    </div>
  );
}

export default App;
