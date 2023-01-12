import './App.css';
import Characters from './components/Characters/Characters';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home.js';
import Navegation from './components/Navegation/Navegation';

function App() {
  return (
    <div className="App">
      <Contact/>
      <Navegation/>
      <Home/>
      <Characters/>
    </div>
  );
}

export default App;
