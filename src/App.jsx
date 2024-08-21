import "./App.css";
import { useState } from "react";
const [counter, setCounter] = useState(0);
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header title="React Counter" />
      <Buttons counter={counter} set={setCounter} />
      <Footer with="React" by="Solene" />
    </>
  );
}

export default App;
