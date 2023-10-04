import { TextField } from "@mui/material";
import { FC } from "react";

interface Props {
  placeholder?: string;
  onChange?: (e: any) => void;
  fullWidth?: boolean;
  className?: string;
  value?: string;
}

const AppInput: FC<Props> = ({
  placeholder,
  onChange,
  fullWidth,
  className,
  value,
}) => {
  return (
    <TextField
      label={placeholder}
      type="text"
      variant="standard"
      fullWidth={fullWidth}
      onChange={onChange}
      className={className}
      value={value}
    />
  );
};

export default AppInput;
