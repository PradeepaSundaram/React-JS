import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";
import { useState } from "react";

function App() {
  const author = "ps";

  const [name, setName] = useState("DT");
  return (
    <div className="App">
      <p> Class Component :</p>
      <ClassComponent />
      <br />

      <p> Function Component :</p>
      <FunctionComponent
        name={name}
        age={20}
        author={author}
        setName={setName}
      />
    </div>
  );
}

export default App;
