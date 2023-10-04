import Link from "next/link";
import { FC, ReactNode } from "react";

interface Props {
  title: string;
  className?: string;
  link: string;
}

const AppLink: FC<Props> = ({ title, className, link }) => {
  return (
    <Link className={`bg-themePrimaryBlue px-4 py-2 rounded-md`} href={link}>
      <div className="flex justify-between items-center text-white">
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default AppLink;
