import './App.css';
import Hero from './components/Hero/Hero';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Main />
    </div>
  );
}

export default App;
