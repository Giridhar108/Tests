import React from "react";

interface Inumber {
  numbers: number[];
}

function Popup({ numbers }: Inumber) {

  return (
    <div className="popup">
      {numbers.map((el, i) => {
        if (i === 0) {
          return (
            <div key={`${el}_${i}`} className="popup__item">
              {el}
            </div>
          );
        }
        return (
          <div key={`${el}_${i}`} className="popup__item">
            , {el}
          </div>
        );
      })}
    </div>
  );
}

export default Popup;
