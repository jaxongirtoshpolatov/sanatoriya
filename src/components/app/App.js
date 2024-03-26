import Header from '../header/header';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <header className="header" id='header'>
        <Header/>
      </header>
      <main className="main">
        <h1>Main</h1>
      </main>
      <footer className='footer'>
        <h1>Footer</h1>
      </footer>
    </div>
  );
}

export default App;
