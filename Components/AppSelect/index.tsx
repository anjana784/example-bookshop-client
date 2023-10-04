import MenuItem from "@mui/material/MenuItem";
import { Select, SelectChangeEvent, FormControl } from "@mui/material";
import { FC } from "react";

interface Props {
  label: string;
  onChange: (e: SelectChangeEvent) => void;
  loading: boolean;
  options: Array<any>;
  value: string;
}

const AppSelect: FC<Props> = ({ label, onChange, loading, options, value }) => {
  return (
    <FormControl fullWidth>
      <Select label={label} onChange={onChange} fullWidth value={value}>
        {options?.map((option, index) => {
          return (
            <MenuItem key={index} value={option.id}>
              {option.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default AppSelect;
