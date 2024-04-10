import "./App.css";
import ClassComponent from "./pages/ClassComponent";
import FunctionComponent from "./pages/FunctionComponent";
import { useState } from "react";
import { Router, Route } from "react-router-dom";
// HOC Layout
import BaseHoc from "./hoc/BaseHoc";

function App() {
  const author = "ps";

  const [name, setName] = useState("DT");
  return (
    <Router>
      <Route
        path="/"
        element={
          <BaseHoc>
            <ClassComponent />
          </BaseHoc>
        }
      />
      <Route
        path="/functional-component"
        element={
          <BaseHoc>
            <FunctionComponent
              name={name}
              age={10}
              author={author}
              setName={setName}
            />
          </BaseHoc>
        }
      />
    </Router>
  );
}

export default App;
