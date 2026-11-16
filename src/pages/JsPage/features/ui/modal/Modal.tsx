import { useState } from "react";
import { ModalWrap } from "./modalStyle";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalWrap className="modal">
      <button className="modalOpen" onClick={() => setIsOpen(true)}>
        모달 열기
      </button>

      {isOpen && (
        <div className="modalOverlay" onClick={() => setIsOpen(false)}>
          <div className="modalBox" onClick={(e) => e.stopPropagation()}>
            <h3 className="modalTitle">모달 제목</h3>
            <p className="modalDesc">바깥 영역을 누르면 닫혀요.</p>
            <button className="modalClose" onClick={() => setIsOpen(false)}>
              닫기
            </button>
          </div>
        </div>
      )}
    </ModalWrap>
  );
};

export default Modal;