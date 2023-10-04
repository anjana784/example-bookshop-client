"use client";
import { FC, ReactNode } from "react";
import BeatLoader from "react-spinners/BeatLoader";
interface Props {
  title: string;
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
  loading?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

const AppButton: FC<Props> = ({
  title,
  onClick,
  icon,
  loading,
  className,
  type = "button",
}) => {
  return (
    <button
      className={`bg-themePrimaryBlue px-4 py-2 rounded-md ${className}}`}
      onClick={onClick}
      type={type}
    >
      {loading ? (
        <BeatLoader color="#fff" loading={loading} size={10} />
      ) : (
        <div className="flex justify-between items-center text-white">
          <p>{title}</p>
          {icon && <div className="w-4"></div>}
          <i>{icon}</i>
        </div>
      )}
    </button>
  );
};

export default AppButton;
