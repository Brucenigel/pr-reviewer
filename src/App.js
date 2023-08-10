import logo from './logo.svg';
import './App.css';

function App() {
  function G(a, b, c, d) {
    const e = 0.017453292519943295;
    const g = Math.pow(10, 10);
    const h = Math.abs((c - a) * e);
    const i = Math.abs((d - b) * e);
    const j =
      (1 - Math.cos(h)) / 2 +
      Math.cos(a * e) * Math.cos(c * e) * (1 - Math.cos(i)) / 2;
    return Math.round(Math.asin(Math.sqrt(j / g)) * 12742 * g) / g;
  }
  
  console.log("testing")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
