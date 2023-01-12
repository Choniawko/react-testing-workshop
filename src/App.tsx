import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./Counter";
import { GlobalCounter } from "./GlobalCounter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ padding: "10px" }}>
            <p>local state</p>
            <Counter />
            <Counter />
          </div>
          <div style={{ padding: "10px" }}>
            <p>global state</p>
            <GlobalCounter />
            <GlobalCounter />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
