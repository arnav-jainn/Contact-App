import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="absolute top-0 z-40 m-auto h-screen w-screen backdrop-blur">
          <div className="relative z-50 m-auto min-h-[200px] max-w-[30%] bg-white p-4">
            <div className="flex justify-end">
              <AiOutlineClose className="text-2xl" onClick={onClose} />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("Modal-root"), //imp when using models
  );
};

export default Modal;
