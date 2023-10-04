"use client";
import ContentArea from "@/Components/ContentArea";
import { FC } from "react";
import SelectJobOptions from "@/Components/SelectJobOptions";
import { useStore } from "@/Store";
import InputJobData from "@/Components/InputJobData";

const InvocePage: FC = () => {
  const { jobOptionSelection } = useStore(
    (state) => state.quotationCalculationSheet.progress
  );

  return (
    <ContentArea>
      {jobOptionSelection === "incompleted" ? (
        <SelectJobOptions />
      ) : (
        <InputJobData />
      )}
    </ContentArea>
  );
};

export default InvocePage;
