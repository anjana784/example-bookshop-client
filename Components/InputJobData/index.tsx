"use client";
import { FC, useState } from "react";
import AppButton from "../AppButton";
import useMachines from "@/Hooks/useMachines";
import { Customer, MachineResponse, Paper, PaperVarient } from "@/utils/types";
import { Form, Formik } from "formik";
import useProducts from "@/Hooks/usePapers";
import useCustomers from "@/Hooks/useCustomers";
import FormikSelect from "../FormikSelect";
import { MenuItem } from "@mui/material";
import FormikInput from "../FormikInput";

const InputJobData: FC = () => {
  const {
    machines,
    error: machineError,
    loading: machineLoading,
  } = useMachines();

  const {
    customers,
    error: customerError,
    loading: customerLoading,
  } = useCustomers();
  const { papers, error: paperError, loading: paperLoading } = useProducts();

  interface payload {
    machineId: string;
    paperTypeId: string;
    paperVarientId: string;
    customerId: string;
    numberOfColors: number;
    jobSize: number;
    paperUnitPrice: number;
    numberOfUps: number;
    paperSize: {
      width: number;
      height: number;
    };
    quantity: number;
  }

  const jobData: payload = {
    machineId: "",
    paperTypeId: "",
    paperVarientId: "",
    customerId: "",
    numberOfColors: 0,
    jobSize: 0,
    paperUnitPrice: 0,
    numberOfUps: 0,
    paperSize: {
      width: 0,
      height: 0,
    },
    quantity: 0,
  };

  const [selectedPaperType, setSelectedPaperType] = useState<string>("");
  const [selectedPaperVarient, setSelectedPaperVarient] = useState<string>("");

  return (
    <>
      <h1 className="text-center text-3xl pb-8">Input Job data</h1>
      <Formik
        initialValues={jobData}
        onSubmit={(values) => console.log(values)}
        className="w-full flex"
      >
        <Form>
          <div className="w-full flex justify-between">
            <div className="w-1/3 h-full">
              {/* select machine */}
              <FormikSelect label="Select machine" name="machineId">
                {machines?.map((machine: MachineResponse) => (
                  <MenuItem key={machine._id} value={machine._id}>
                    {machine.name}
                  </MenuItem>
                ))}
              </FormikSelect>
              {/* select paper type */}
              <FormikSelect
                label="Select paper type"
                name="paperTypeId"
                onChange={(value) => setSelectedPaperType(value)}
              >
                {papers?.map((paper: Paper) => (
                  <MenuItem key={paper._id} value={paper._id}>
                    {paper.type}
                  </MenuItem>
                ))}
              </FormikSelect>
              {/* select paper varient */}
              <FormikSelect
                label="Select paper varient"
                name="paperVarientId"
                onChange={(value) => setSelectedPaperVarient(value)}
              >
                {papers
                  ?.find((paper: Paper) => paper._id === selectedPaperType)
                  ?.varients.map((varient: PaperVarient) => (
                    <MenuItem key={varient._id} value={varient._id}>
                      {varient.varient}
                    </MenuItem>
                  ))}
              </FormikSelect>
              {/* select customer */}
              <FormikSelect label="Select customer" name="customerId">
                {customers?.map((customer: Customer) => (
                  <MenuItem key={customer._id} value={customer._id}>
                    {customer.companyName}
                  </MenuItem>
                ))}
              </FormikSelect>
              {/* number of colors */}
              <FormikInput
                label="Number of colors"
                name="numberOfColors"
                type="number"
                fullWidth
              />
            </div>
            <div className="w-1/3 h-full">
              {/* job size */}
              <FormikInput
                label="Job size"
                name="jobSize"
                type="number"
                fullWidth
              />
              {/* paper unit price */}
              <FormikInput
                label="Paper unit price"
                name="paperUnitPrice"
                type="number"
                fullWidth
                autoFocus={selectedPaperVarient !== ""}
                disabled={!selectedPaperType || !selectedPaperVarient}
                value={
                  papers
                    ?.find((paper: Paper) => paper._id === selectedPaperType)
                    ?.varients.find(
                      (varient: PaperVarient) =>
                        varient._id === selectedPaperVarient
                    )?.unitPrice || 0 // Ensure a default value (0 in this case)
                }
              />
              <div className="w-full flex justify-between">
                {/* paperSize.width */}
                <FormikInput
                  label="Paper width"
                  name="paperSize.width"
                  type="number"
                  fullWidth
                  disabled
                  value={
                    papers
                      ?.find((paper: Paper) => paper._id === selectedPaperType)
                      ?.varients.find(
                        (varient: PaperVarient) =>
                          varient._id === selectedPaperVarient
                      )?.size.width || 0 // Ensure a default value (0 in this case)
                  }
                />
                {/* paperSize.height */}
                <FormikInput
                  label="Paper height"
                  name="paperSize.height"
                  type="number"
                  fullWidth
                  disabled
                  value={
                    papers
                      ?.find((paper: Paper) => paper._id === selectedPaperType)
                      ?.varients.find(
                        (varient: PaperVarient) =>
                          varient._id === selectedPaperVarient
                      )?.size.height || 0 // Ensure a default value (0 in this case)
                  }
                />
              </div>
              {/* number of ups */}
              <FormikInput
                label="Number of ups"
                name="numberOfUps"
                type="number"
                fullWidth
              />
              {/* quantity */}
              <FormikInput
                label="Quantity"
                name="quantity"
                type="number"
                fullWidth
              />
            </div>
          </div>
          <div className="w-full flex flex-row-reverse">
            <AppButton type="submit" title="Next" />
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default InputJobData;
