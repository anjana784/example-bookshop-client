import { FC, useState } from "react";
import AppButton from "../AppButton";
import { addVarient } from "@/lib/paper";
import { useStore } from "@/Store";
import { toast } from "react-toastify";
import { successIcon } from "../ToastifyIcons";
import { mutate } from "swr";
import * as YUP from "yup";
import { Form, Formik } from "formik";
import FormikInput from "../FormikInput";
import usePapers from "@/Hooks/usePapers";
import FormikSelect from "../FormikSelect";
import { MenuItem } from "@mui/material";
import { Paper } from "@/utils/types";

const AddPaper: FC = () => {
  const { popupState, setPopupState } = useStore((state) => state);

  //loading state
  const [submissionLoading, setSubmissionLoading] = useState<boolean>(false);

  //submission error state
  const [submissionError, setSubmissionError] = useState<String | null>(null);

  const { papers, error, loading } = usePapers();

  //varient payload state
  interface varientPayload {
    paperTypeId: string;
    varient: string;
    unitPrice: number;
    size: {
      width: number;
      height: number;
    };
  }

  const varientState: varientPayload = {
    paperTypeId: "",
    varient: "",
    unitPrice: 0,
    size: {
      width: 0,
      height: 0,
    },
  };

  //validation schema
  const validationSchema = YUP.object({
    paperTypeId: YUP.string().required("Required"),
    varient: YUP.string(),
    unitPrice: YUP.number(),
    size: YUP.object({
      width: YUP.number(),
      height: YUP.number(),
    }),
  });

  const handleSubmit = async (values: varientPayload) => {
    setSubmissionLoading(true);
    const response = await addVarient(values.paperTypeId, {
      varient: values.varient,
      unitPrice: values.unitPrice,
      size: values.size,
    });
    setSubmissionLoading(false);
    if (response) {
      if (response.status === "error") {
        setSubmissionError(response.message);
      } else {
        mutate("/api/product");
        setPopupState({ ...popupState, isOpen: false });
        toast.success("product added successfully", {
          icon: successIcon,
        });
      }
    }
  };

  return (
    <Formik
      initialValues={varientState}
      onSubmit={(values) => handleSubmit(values)}
      validationSchema={validationSchema}
    >
      <Form>
        <FormikSelect label="Paper type" name="paperTypeId">
          {papers?.map((paper: Paper) => {
            return (
              <MenuItem key={paper._id} value={paper._id}>
                {paper.type}
              </MenuItem>
            );
          })}
        </FormikSelect>
        <FormikInput
          name="varient"
          label="Paper Varient"
          type="text"
          fullWidth
        />
        <FormikInput
          name="unitPrice"
          label="Unit Price"
          type="number"
          fullWidth
        />
        <div className="w-full flex justify-between">
          <FormikInput name="size.width" label="Width" type="number" />
          <FormikInput name="size.height" label="Height" type="number" />
        </div>
        {submissionError && (
          <p className="text-themeError">{submissionError}</p>
        )}
        <div className="absolute bottom-0 right-0">
          <AppButton
            title="Save"
            className="w-full"
            type="submit"
            loading={submissionLoading}
          />
        </div>
      </Form>
    </Formik>
  );
};

export default AddPaper;
