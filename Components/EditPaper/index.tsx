import { FC, useState } from "react";
import AppButton from "../AppButton";
import { updateVarient } from "@/lib/paper";
import { Paper, PaperVarient } from "@/utils/types";
import { useStore } from "@/Store";
import { toast } from "react-toastify";
import { successIcon } from "../ToastifyIcons";
import { mutate } from "swr";
import { Form, Formik } from "formik";
import FormikInput from "../FormikInput";
import * as YUP from "yup";

interface Props {
  paper: Paper;
  varient: PaperVarient;
}

const EditPaper: FC<Props> = ({ paper, varient }) => {
  const { popupState, setPopupState } = useStore((state) => state);

  const [submissionLoading, setSubmissionLoading] = useState<boolean>(false);
  const [submissionError, setSubmissionError] = useState<String | null>(null);

  interface payload {
    paperId?: string;
    varientId?: string;
    newVarient?: PaperVarient;
  }

  const payload: payload = {
    paperId: paper._id,
    varientId: varient._id,
    newVarient: {
      varient: varient.varient,
      unitPrice: varient.unitPrice,
      size: {
        width: varient.size.width,
        height: varient.size.height,
      },
    },
  };

  //validation schema
  const validationSchema = YUP.object({
    paperId: YUP.string().required("Required"),
    varientId: YUP.string(),
    newVarient: YUP.object({
      varient: YUP.string(),
      unitPrice: YUP.number(),
      size: YUP.object({
        width: YUP.number(),
        height: YUP.number(),
      }),
    }),
  });

  const handleSubmit = async (
    paperId?: string,
    varientId?: string,
    newVarient?: PaperVarient
  ) => {
    setSubmissionLoading(true);
    const response = await updateVarient(paperId, varientId, newVarient);
    setSubmissionLoading(false);
    if (response) {
      if (response.status === "error") {
        setSubmissionError(response.message);
      } else {
        mutate("/api/product");
        setPopupState({ ...popupState, isOpen: false });
        toast.success("Product updated successfully", {
          icon: successIcon,
        });
      }
    }
  };

  return (
    <Formik
      initialValues={payload}
      onSubmit={(values) =>
        handleSubmit(values.paperId, values.varientId, values.newVarient)
      }
      validationSchema={validationSchema}
    >
      <Form>
        <FormikInput
          label="Paper type"
          name="paperId"
          type="text"
          defaultValue={paper.type}
          disabled
          fullWidth
        />
        <FormikInput
          label="Paper Varient"
          name="varientId"
          type="text"
          defaultValue={varient.varient}
          disabled
          fullWidth
        />
        <FormikInput
          name="newVarient.unitPrice"
          label="Unit Price"
          defaultValue={varient.unitPrice}
          type="number"
          autoFocus
          fullWidth
        />
        <div className="w-full flex justify-between">
          <FormikInput
            name="newVarient.size.width"
            label="Width"
            type="number"
            autoFocus
            defaultValue={varient.size.width}
            disabled
          />
          <FormikInput
            name="newVarient.size.height"
            label="Height"
            type="number"
            autoFocus
            defaultValue={varient.size.height}
            disabled
          />
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

export default EditPaper;
