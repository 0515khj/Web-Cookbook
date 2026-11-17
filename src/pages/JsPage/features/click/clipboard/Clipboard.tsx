import { useEffect, useRef, useState } from "react";
import { ClipboardWrap } from "./clipboardStyle";

const text = "진짜 복사됨 Ctrl+V ㄱㄱ";

const Clipboard = () => {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      if (timer.current) clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 1500);
    } catch {
      alert("복사에 실패했어요");
    }
  };

  return (
    <ClipboardWrap className="clipboard">
      <div className="clipboardBox">
        <code className="clipboardText">{text}</code>
        <button
          className={copied ? "clipboardButton copied" : "clipboardButton"}
          onClick={handleCopy}
        >
          {copied ? "복사됨!" : "복사"}
        </button>
      </div>
    </ClipboardWrap>
  );
};

export default Clipboard;