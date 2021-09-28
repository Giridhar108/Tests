import React from "react";

export function useSetNumbers() {
  const [number, setNumber] = React.useState(null);

  const [numbers, setNumbers] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (number) {
      setNumbers([...numbers, number]);
    }
  }, [number]);

  return {setNumber, setNumbers, numbers};
}
