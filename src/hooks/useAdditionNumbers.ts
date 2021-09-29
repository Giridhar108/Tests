import React, { FormEventHandler } from "react";
import { isValidValue } from "../helpers/isValidValue";
import { UseFormField } from "./useFormField";

interface IuseAdditionNumbers {
  handleSetState: any;
  setIsOpen: any;
}

type ReturnType = [
  FormEventHandler<HTMLFormElement> | undefined,
  { description: string },
  {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  },
  {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
];

function useAdditionNumbers({
  handleSetState,
  setIsOpen,
}: IuseAdditionNumbers): ReturnType {
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

  return [handleSubmit, error, numberOne, numberTwo];
}

export default useAdditionNumbers;
