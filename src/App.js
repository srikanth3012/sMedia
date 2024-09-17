import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mui/material";
import Body from "./Componants/Body";
import Store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        {/* <header className="App-header">
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
      </header> */}
        {/* <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button> */}
        <Body />
      </div>
    </Provider>
  );
}

export default App;
