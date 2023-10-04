import { FC, useState } from "react";
import AppButton from "../AppButton";
import { createMachine } from "@/lib/machine";
import { Machine } from "@/utils/types";
import { useStore } from "@/Store";
import { toast } from "react-toastify";
import { successIcon } from "../ToastifyIcons";
import { mutate } from "swr";
import { Form, Formik } from "formik";
import * as YUP from "yup";
import FormikInput from "../FormikInput";

const AddMachine: FC = () => {
  const { popupState, setPopupState } = useStore((state) => state);

  // loading state
  const [loading, setLoading] = useState<boolean>(false);

  // error state
  const [error, setError] = useState<String | null>(null);

  // machine state
  const machine: Machine = {
    name: "",
    platePrice: 0,
    makeReadyPrice: 0,
    description: "",
  };

  // machine validation schema
  const validationSchema = YUP.object({
    name: YUP.string().required("Required"),
    platePrice: YUP.number().required("Required"),
    makeReadyPrice: YUP.number().required("Required"),
    desciption: YUP.string(),
  });
  const handleSubmit = async () => {
    setLoading(true);
    const response = await createMachine(machine);
    setLoading(false);
    if (response) {
      if (response.status === "error") {
        setError(response.message);
      } else {
        mutate("/api/machine");
        setPopupState({ ...popupState, isOpen: false });
        toast.success("machine added successfully", {
          icon: successIcon,
        });
      }
    }
  };

  return (
    <Formik
      initialValues={machine}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form method="post" className="h-full w-full">
        <FormikInput name="name" type="text" label="Machine name" fullWidth />
        <FormikInput
          name="platePrice"
          type="number"
          label="Plate price"
          fullWidth
        />
        <FormikInput
          name="makeReadyPrice"
          type="number"
          label="Make ready price"
          fullWidth
        />
        <FormikInput
          name="description"
          type="text"
          label="Description"
          fullWidth
        />
        {error && <p className="text-themeError">{error}</p>}
        <div className="absolute bottom-0 right-0">
          <AppButton
            title="Save"
            type="submit"
            className="w-full"
            loading={loading}
          />
        </div>
      </Form>
    </Formik>
  );
};

export default AddMachine;
