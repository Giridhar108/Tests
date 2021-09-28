import React from "react";
import Popup from "./components/popup";
import AdditionNumbers from "./components/additionNumbers";
import { useSetNumbers } from "./hooks/useSetNumbers";

function App() {
  const { setNumber, numbers } = useSetNumbers();

  return (
    <div className="App">
      <Popup numbers={numbers} />
      <AdditionNumbers handleSetState={setNumber} />
    </div>
  );
}

export default App;
