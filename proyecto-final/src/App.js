import './App.css';
import Characters from './components/Characters/Characters';
import Home from './components/Home/Home.js';
import Navegation from './components/Navegation/Navegation';

function App() {
  return (
    <div className="App">
      <Navegation/>
      <Home/>
      <Characters/>
    </div>
  );
}

export default App;
