import React from "react";
import Popup from "./components/popup";
import AdditionNumbers from "./components/additionNumbers";
import { useSetNumbers } from "./hooks/useSetNumbers";

function App() {
  const { setNumber, numbers } = useSetNumbers();

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="App">
      <Popup numbers={numbers} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <AdditionNumbers handleSetState={setNumber} setIsOpen={setIsOpen} />
    </div>
  );
}

export default App;
