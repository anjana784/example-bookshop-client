import { JobOption } from "@/utils/types";
import { Checkbox } from "@mui/material";
import { ChangeEvent, FC, useEffect } from "react";
import { useStore } from "@/Store";

interface Props {
  jobOption: JobOption;
}

const JobOption: FC<Props> = ({ jobOption }) => {
  const { addJobOption, removeJobOption } = useStore((state) => state);

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      addJobOption(jobOption);
    } else {
      removeJobOption(jobOption);
    }
  };
  return (
    <div className="flex w-full justify-between px-16 items-center">
      <p>{jobOption?.name}</p>
      <Checkbox onChange={handleCheck} />
    </div>
  );
};

export default JobOption;
