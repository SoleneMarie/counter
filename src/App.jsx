import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Header title="React Counter" />
      <main>
        <section className="counter">
          <div className="less">
            <button
              onClick={() => {
                setCounter(counter - 1);
              }}
            >
              -
            </button>
          </div>
          <div className="total">
            <span>{counter}</span>
          </div>
          <div className="more">
            <button
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              +
            </button>
          </div>
        </section>
        <div className="reset">
          <button
            onClick={() => {
              setCounter(0);
            }}
          >
            Reset
          </button>
        </div>
      </main>
      <footer>
        <span>Made with React by Solene</span>
      </footer>
    </>
  );
}

export default App;
