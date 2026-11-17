import { useEffect, useRef, useState } from "react";
import { ToastWrap } from "./toastStyle";

type ToastType = "success" | "error";
interface ToastItem {
  id: number;
  type: ToastType;
  text: string;
}

const Toast = () => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const idRef = useRef(0);
  const timers = useRef<number[]>([]);

  // 컴포넌트가 사라질 때 대기 중인 타이머 정리
  useEffect(() => {
    const list = timers.current;
    return () => list.forEach(clearTimeout);
  }, []);

  const show = (type: ToastType, text: string) => {
    const id = idRef.current++;
    setToasts((prev) => [...prev, { id, type, text }]);

    // 2.5초 뒤 이 알림만 제거
    const timer = window.setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2500);
    timers.current.push(timer);
  };

  return (
    <ToastWrap className="toast">
      <div className="toastBox">
        <div className="toastButtons">
          <button className="toastButton" onClick={() => show("success", "저장되었어요!")}>
            성공
          </button>
          <button className="toastButton" onClick={() => show("error", "오류가 발생했어요")}>
            에러
          </button>
        </div>

        <div className="toastStack" aria-live="polite">
          {toasts.map((t) => (
            <div key={t.id} className={`toastItem ${t.type}`}>
              {t.text}
            </div>
          ))}
        </div>
      </div>
    </ToastWrap>
  );
};

export default Toast;