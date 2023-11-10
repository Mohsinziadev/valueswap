import React, { useEffect } from "react";

const Modal = ({ children,className, toggle = null, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  return isOpen ? (
    <div className="fixed bg-black overflow-auto flex items-center justify-center bg-opacity-70 w-full h-full box-border top-0 left-0">
      <div
        onClick={toggle ? toggle : null}
        className="absolute top-0 left-0 w-screen h-screen"
      ></div>
      <div className={`w-full max-w-xl  z-30 ${className}`}>
        {children}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Modal;
