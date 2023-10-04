import { AiOutlineCheckCircle, AiOutlineWarning } from "react-icons/ai";
import { MdErrorOutline } from "react-icons/md";

export const successIcon = (
  <AiOutlineCheckCircle className="text-green w-8 h-8" />
);
export const errorIcon = <MdErrorOutline className="text-red w-8 h-8" />;
export const warningIcon = <AiOutlineWarning className="text-gold w-8 h-8" />;
