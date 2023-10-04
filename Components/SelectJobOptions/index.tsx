"use client";
import { FC } from "react";
import useJobOptions from "@/Hooks/useJobOptions";
import JobOption from "../JobOption";
import { JobOptionResponse } from "@/utils/types";
import { useStore } from "@/Store";
import AppButton from "../AppButton";

const SelectJobOptions: FC = () => {
  const { jobOptions, error, loading } = useJobOptions();

  const { updateJobOptionSelectionProgress } = useStore((state) => state);

  return (
    <>
      <h1 className="text-center text-3xl pb-8">Select Job Options</h1>
      <div className="w-full flex">
        <div className="w-1/3 h-full">
          {jobOptions?.map((jobOption: JobOptionResponse, index: number) => {
            if (0 <= index && index <= 8) {
              return <JobOption jobOption={jobOption} key={index} />;
            }
          })}
        </div>
        <div className="w-1/3 h-full">
          {jobOptions?.map((jobOption: JobOptionResponse, index: number) => {
            if (9 <= index && index <= 17) {
              return <JobOption jobOption={jobOption} key={index} />;
            }
          })}
        </div>
        <div className="w-1/3 h-full ">
          {jobOptions?.map((jobOption: JobOptionResponse, index: number) => {
            if (18 <= index) {
              return <JobOption jobOption={jobOption} key={index} />;
            }
          })}
        </div>
      </div>
      <div className="w-full flex flex-row-reverse px-16">
        <AppButton
          title="Next"
          onClick={() => updateJobOptionSelectionProgress("completed")}
        />
      </div>
    </>
  );
};

export default SelectJobOptions;
