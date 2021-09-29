import React from "react";
import useInterval from "../hooks/useInterval";

interface Ipopup {
  numbers: number[];
  isOpen: boolean;
  setIsOpen: any;
}

function Popup({ numbers, isOpen, setIsOpen }: Ipopup) {
  useInterval(
    () => {
      setIsOpen(false);
    },

    isOpen ? 3000 : null
  );

  return (
    <div className={isOpen ? "popup" : "popup hidden"} data-testid='popup'>
      {numbers.map((el, i) => {
        if (i === 0) {
          return (
            <div key={`${el}_${i}`} className={isOpen ? "popup__item" : "popup__item hidden"}>
              {el}
            </div>
          );
        }
        return (
          <div key={`${el}_${i}`} className={isOpen ? "popup__item" : "popup__item hidden"}>
            , {el}
          </div>
        );
      })}
    </div>
  );
}

export default Popup;
