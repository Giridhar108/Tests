import React from "react";
import { isValidValue } from "../helpers/isValidValue";
import { UseFormField } from "../hooks/useFormField";

interface IhandleSetState {
  handleSetState: any;
  setIsOpen: any;
}

function AdditionNumbers({ handleSetState, setIsOpen }: IhandleSetState) {
  const [clear, setclear] = React.useState(false);
  const [error, seterror] = React.useState({ description: "" });

  const numberOne = UseFormField(clear, setclear);
  const numberTwo = UseFormField(clear, setclear);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isValidValue(numberOne.value) && isValidValue(numberTwo.value)) {
      handleSetState(+numberOne.value + +numberTwo.value);
      setclear(true);
      setIsOpen(true);
      seterror({ description: "" });
    } else {
      seterror({ description: "вводите только цифры" });
    }
  };

  return (
    <div className="addition-numbers">
      <form onSubmit={handleSubmit}>
        <div className="addition-numbers__inputs">
          <input className="addition-numbers__nuumber" {...numberOne} />
          <input className="addition-numbers__nuumber" {...numberTwo} />
        </div>
        <button className="addition-numbers__btn" type="submit">
          Выполнить
        </button>
        {error.description && (
          <div className="addition-numbers__error">{error.description}</div>
        )}
      </form>
    </div>
  );
}

export default AdditionNumbers;
