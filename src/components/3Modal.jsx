import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="absolute top-0 z-40  h-screen w-screen backdrop-blur">
          <div className="relative z-50 mx-[35%] my-[10%] min-h-[200px] max-w-[30%] bg-[#e4f1fe] p-4  ">
            <div className="flex justify-end">
              <AiOutlineClose className="text-2xl cursor-pointer " onClick={onClose} />
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
