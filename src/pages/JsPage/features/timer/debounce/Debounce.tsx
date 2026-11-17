import { useRef, useState } from "react";
import { DebounceWrap } from "./debounceStyle";

const DELAY = 500;

const Debounce = () => {
    const [counts, setCounts] = useState({ input: 0, debounce: 0, throttle: 0 });
    const [text, setText] = useState("");
    const debounceTimer = useRef<number | null>(null);
    const throttleWait = useRef(false);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
        setCounts((c) => ({ ...c, input: c.input + 1 }));
        // 디바운스: 입력이 멈추고 0.5초 뒤에 1번
        if (debounceTimer.current) clearTimeout(debounceTimer.current);
        debounceTimer.current = window.setTimeout(() => {
            setCounts((c) => ({ ...c, debounce: c.debounce + 1 }));
        }, DELAY);

        // 쓰로틀: 0.5초에 최대 1번
        if (!throttleWait.current) {
            throttleWait.current = true;
            setCounts((c) => ({ ...c, throttle: c.throttle + 1 }));
            window.setTimeout(() => {
                throttleWait.current = false;
            }, DELAY);
        }
    };

    const reset = () => {
        if (debounceTimer.current) clearTimeout(debounceTimer.current);
        setText("");
        setCounts({ input: 0, debounce: 0, throttle: 0 });
    }

    return (
        <DebounceWrap className="debounceThrottle">
            <div className="dtBox">
                <input
                    className="dtInput"
                    value={text}
                    placeholder="여기에 빠르게 입력해 보세요"
                    onChange={handleInput}
                />
                <ul className="dtList">
                    <li className="dtItem">
                        <span className="dtLabel">입력 이벤트</span>
                        <b className="dtCount">{counts.input}</b>
                    </li>
                    <li className="dtItem">
                        <span className="dtLabel">디바운스 <small>멈추면 1번</small></span>
                        <b className="dtCount">{counts.debounce}</b>
                    </li>
                    <li className="dtItem">
                        <span className="dtLabel">쓰로틀 <small>0.5초에 1번</small></span>
                        <b className="dtCount">{counts.throttle}</b>
                    </li>
                </ul>
                <button className="dtReset" onClick={reset}>초기화</button>
            </div>
        </DebounceWrap>
    );
};

export default Debounce;