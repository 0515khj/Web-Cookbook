import type { Feature } from "../../../../../types/feature";
import Modal from "./Modal";

export const modal: Feature = {
  id: "modal",
  fileName: "모달 팝업",
  title: "모달 팝업",
  description:
    "버튼을 누르면 화면 위에 팝업이 떠요.",
  component: Modal,
  code: {
    html: `<button id="open" class="modal-open">모달 열기</button>

<div id="overlay" class="modal-overlay">
  <div class="modal-box">
    <h3>모달 제목</h3>
    <p>바깥 영역을 누르면 닫혀요.</p>
    <button id="close" class="modal-close">닫기</button>
  </div>
</div>`,
    css: `.modal-open {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background: #007acc;
  color: #ffffff;
  cursor: pointer;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  display: none;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
}

.modal-overlay.open {
  display: flex;
}

.modal-box {
  width: 320px;
  padding: 24px;
  background: #252526;
  border: 1px solid #3c3c3c;
  border-radius: 8px;
  color: #ffffff;
}

.modal-close {
  margin-top: 20px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: #37373d;
  color: #ffffff;
  cursor: pointer;
}`,
    js: `const overlay = document.getElementById("overlay");

document.getElementById("open").onclick = () => {
  overlay.classList.add("open");
};

document.getElementById("close").onclick = () => {
  overlay.classList.remove("open");
};

overlay.onclick = (e) => {
  if (e.target === overlay) overlay.classList.remove("open");
};`,
  },
};