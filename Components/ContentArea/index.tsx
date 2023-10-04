"use client";
import { FC, ReactNode, useEffect } from "react";
import { useStore } from "@/Store";
import Popup from "../Popup";
import ActionPopup from "../ActionPopup";

interface Props {
  children: ReactNode;
}

const ContentArea: FC<Props> = ({ children }) => {
  // get from store
  const { popupState, actionPopupState, setActionPopupState } = useStore(
    (state) => state
  );

  // handle even for closing action popup
  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      if (!e.target.classList.value.split(" ").includes("action")) {
        setActionPopupState({
          isOpen: false,
          actions: null,
          position: null,
        });
      }
    };

    if (typeof document !== null) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => document.removeEventListener("click", handleOutsideClick);
  }, [setActionPopupState]);

  return (
    <>
      {popupState.isOpen && (
        <Popup title={popupState.title}>{popupState.children}</Popup>
      )}
      {actionPopupState.isOpen && (
        <ActionPopup
          actions={actionPopupState.actions}
          position={actionPopupState.position}
        />
      )}
      {children}
    </>
  );
};

export default ContentArea;
