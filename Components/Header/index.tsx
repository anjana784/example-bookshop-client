import { FC } from "react";
import Image from "next/image";
import { PiUserCircleGearFill } from "react-icons/pi";
import Link from "next/link";

const Header: FC = () => {
  return (
    <header className="w-screen h-20">
      <div className="w-5/6 m-auto h-full">
        <div className="w-full h-full flex">
          <div className="w-1/5 h-full">
            <div className="w-full h-full flex justify-center items-center">
              <Link href="/">
                <Image
                  src="/logo.png"
                  width={150}
                  height={150}
                  alt="logo"
                  className="cursor-pointer"
                />
              </Link>
            </div>
          </div>
          <div className="w-4/5 h-full">
            <div className="w-full h-full flex flex-row-reverse items-center">
              <PiUserCircleGearFill className="w-10 h-10 text-themePrimaryBlue cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
