import { InputAdornment, TextField } from "@mui/material";
import { FC } from "react";
import { CiSearch } from "react-icons/ci";

interface Props {
  placeholder?: string;
}

const AppSearch: FC<Props> = ({ placeholder }) => {
  return (
    <TextField
      id="standard-search"
      placeholder={placeholder ? placeholder : "Search"}
      type="search"
      variant="standard"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <CiSearch />
          </InputAdornment>
        ),
      }}
      className="px-4 py-2 rounded-md"
    />
  );
};

export default AppSearch;
