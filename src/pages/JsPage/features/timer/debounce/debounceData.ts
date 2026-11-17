import type { Feature } from "../../../../../types/feature";
import Debounce from "./Debounce";

export const debounce: Feature = {
  id: "debounceThrottle",
  fileName: "디바운스/쓰로틀",
  title: "디바운스와 쓰로틀",
  description:
    "이벤트가 너무 자주 일어날 때 실행 횟수를 줄여요. 디바운스는 멈춘 뒤 한 번, 쓰로틀은 일정 시간마다 한 번 실행돼요.",
  component: Debounce,
  code: {
    html: `<input id="input" class="input" placeholder="빠르게 입력해 보세요" />
    <ul class="list">
      <li>입력 이벤트 <b id="raw">0</b></li>
      <li>디바운스 <b id="debounce">0</b></li>
      <li>쓰로틀 <b id="throttle">0</b></li>
    </ul>`,

    css: `.input {
      width: 300px;
      padding: 10px 12px;
      border: 1px solid #3c3c3c;
      border-radius: 4px;
    }

    .list {
      width: 300px;
      margin-top: 12px;
      padding: 0;
      list-style: none;
    }

    .list li {
      display: flex;
      justify-content: space-between;
      padding: 8px 12px;
      border: 1px solid #3c3c3c;
      border-radius: 4px;
      margin-bottom: 6px;
    }`,

    js: `// 디바운스: 마지막 호출 후 delay가 지나면 1번 실행

    function debounce(fn, delay) {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
      };
    }

    // 쓰로틀: delay 동안 최대 1번만 실행
    function throttle(fn, delay) {
      let waiting = false;
      return (...args) => {
        if (waiting) return;
        fn(...args);
        waiting = true;
        setTimeout(() => {
          waiting = false;
        }, delay);
      };
    }

    const input = document.getElementById("input");
    const rawEl = document.getElementById("raw");
    const debounceEl = document.getElementById("debounce");
    const throttleEl = document.getElementById("throttle");
    
    let rawCount = 0;
    let debounceCount = 0;
    let throttleCount = 0;
    
    const onDebounce = debounce(() => {
      debounceCount++;
      debounceEl.textContent = debounceCount;
    }, 500);
    
    const onThrottle = throttle(() => {
      throttleCount++;
      throttleEl.textContent = throttleCount;
    }, 500);
    
    input.addEventListener("input", () => {
      rawCount++;
      rawEl.textContent = rawCount;
      onDebounce();
      onThrottle();
    });`,
  },
};