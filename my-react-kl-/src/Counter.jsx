import React, { useState, useCallback } from "react";

const Button = React.memo(function Button({ onClick, label }) {
  console.log("Button rendered:", label);
  return <button onClick={onClick}>{label}</button>;
});

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    console.log("Increment clicked");
    setCount((prev) => prev + 1);
  }, []);

  const handleReset = useCallback(() => {
    console.log("Reset clicked");
    setCount(0);
  }, []);

  console.log("Counter rendered");

  return (
    <div>
      <h2>Counter: {count}</h2>

      <Button onClick={handleIncrement} label="Увеличить" />
      <Button onClick={handleReset} label="Сбросить" />
    </div>
  );
}

export default Counter;
