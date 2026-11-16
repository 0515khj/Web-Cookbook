import { useEffect, useState } from "react";
import { StopwatchWrap } from "./stopwatchStyle";

const format = (ms: number) => {
  const min = String(Math.floor(ms / 60000)).padStart(2, "0");
  const sec = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
  const cs = String(Math.floor((ms % 1000) / 10)).padStart(2, "0");
  return `${min}:${sec}:${cs}`;
};

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setTime((t) => t + 10), 10);
    return () => clearInterval(id);
  }, [running]);

  const reset = () => {
    setRunning(false);
    setTime(0);
  };

  return (
    <StopwatchWrap className="stopwatch">
      <div className="stopwatchBox">
        <span className="stopwatchTime">{format(time)}</span>
        <div className="stopwatchButtons">
          <button
            className={running ? "stopwatchButton" : "stopwatchButton start"}
            onClick={() => setRunning(!running)}
          >
            {running ? "정지" : "시작"}
          </button>
          <button className="stopwatchButton" onClick={reset}>
            초기화
          </button>
        </div>
      </div>
    </StopwatchWrap>
  );
};

export default Stopwatch;