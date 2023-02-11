import './App.css';
import Choosing from './components/Choosing/Choosing';
import Footer from './components/Footer/Footer';
import Hero from './components/HeroSection/Hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Programms from './components/Programs/Programms';
import Testmonials from './components/Testmonials/Testmonials';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programms/>
      <Choosing/>
      <Plans/>
      <Testmonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
