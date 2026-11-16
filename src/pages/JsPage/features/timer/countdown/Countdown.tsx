import { useEffect, useState } from "react";
import { CountdownWrap } from "./countdownStyle";

const START = 10;

const Countdown = () => {
  const [left, setLeft] = useState(START);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setLeft((prev) => {
        if (prev <= 1) {
          setRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [running]);

  const handleClick = () => {
    setLeft(START);
    setRunning(true);
  };

  return (
    <CountdownWrap className="countdown">
      <div className="countdownBox">
        <span className={left === 0 ? "countdownTime end" : "countdownTime"}>
          {left}
        </span>
        <button
          className="countdownButton"
          onClick={handleClick}
          disabled={running}
        >
          {running ? "카운트 중..." : "10초 시작"}
        </button>
      </div>
    </CountdownWrap>
  );
};

export default Countdown;