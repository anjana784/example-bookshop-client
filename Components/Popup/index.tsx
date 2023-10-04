"use client";
import { FC, ReactNode } from "react";
import { GrClose } from "react-icons/gr";
import { useStore } from "@/Store";

interface Props {
  children?: ReactNode;
  title: string;
}

const Popup: FC<Props> = ({ children, title }) => {
  const { setPopupState, popupState } = useStore((state) => state);

  return (
    <div className="w-screen h-screen bg-[#00000073] z-50 absolute top-0 left-0">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-1/2 h-[600px] bg-white rounded-md relative">
          {/* close button */}
          <div className="w-12 h-12 absolute top-0 right-0">
            <div className="w-full h-full flex justify-center items-center">
              <i
                onClick={() =>
                  setPopupState({
                    ...popupState,
                    isOpen: false,
                    children: null,
                  })
                }
              >
                <GrClose className=" text-xl cursor-pointer" />
              </i>
            </div>
          </div>
          <div className="w-full h-full p-8">
            <h1 className="text-center text-2xl font-semibold">{title}</h1>
            <div className="w-full h-[calc(100%_-_32px)] pt-4 relative">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
