import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Projects from './components/Projects';
import './App.css';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 300,
    });
  });
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

