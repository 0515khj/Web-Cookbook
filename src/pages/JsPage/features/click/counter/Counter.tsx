import { useState } from "react";
import { CounterWrap } from "./counterStyle";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <CounterWrap className="counter">
      <div className="counterBox">
        <button className="counterButton" onClick={() => setCount(count - 1)}>
          -
        </button>
        <span className="counterValue">{count}</span>
        <button className="counterButton" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </CounterWrap>
  );
};

export default Counter;