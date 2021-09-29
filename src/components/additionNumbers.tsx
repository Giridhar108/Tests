import React from "react";
import useAdditionNumbers from "../hooks/useAdditionNumbers";

interface IhandleSetState {
  handleSetState: any;
  setIsOpen: any;
}

function AdditionNumbers({ handleSetState, setIsOpen }: IhandleSetState) {
  const [handleSubmit, error, numberOne, numberTwo] = useAdditionNumbers({
    handleSetState,
    setIsOpen,
  });

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
