import { FC, useState } from "react";
import AppButton from "../AppButton";
// import { createCustomer } from "@/lib/customer";
import { Customer } from "@/utils/types";
import { useStore } from "@/Store";
import { toast } from "react-toastify";
import { successIcon } from "../ToastifyIcons";
import { mutate } from "swr";
import { Formik, Form, FieldArray } from "formik";
import * as YUP from "yup";
import FormikInput from "../FormikInput";

const AddBook: FC = () => {
  const { popupState, setPopupState } = useStore((state) => state);

  // loading state
  const [loading, setLoading] = useState<boolean>(false);

  // submission error state
  const [submissionError, setSubmissionError] = useState<String | null>(null);

  // customer state for the form
  const customer: Customer = {
    companyName: "",
    email: "",
    address: "",
    phone: "",
  };

  // validation schema for the customer
  const validationSchema = YUP.object<Customer>({
    companyName: YUP.string().required("Required"),
    email: YUP.string().required("Required").email("invalid email"),
    address: YUP.string().required("Required"),
    phone: YUP.string().required("Required"),
  });

  // handle the submitting a new customer
  const handleSubmit = async (customer: Customer) => {
    // setLoading(true);
    // const response = await createCustomer(customer);
    // setLoading(false);
    // if (response) {
    //   if (response.status === "error") {
    //     setSubmissionError(response.message);
    //   } else {
    //     mutate("/api/customer");
    //     setPopupState({ ...popupState, isOpen: false });
    //     toast.success("Customer added successfully", {
    //       icon: successIcon,
    //     });
    //   }
    // }
  };

  return (
    <Formik
      initialValues={customer}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form method="post" className="h-full w-full">
        <FormikInput name="companyName" type="text" label="Name" fullWidth />
        <FormikInput name="email" type="email" label="Author" fullWidth />
        <FormikInput name="address" type="text" label="Genre" fullWidth />
        <FormikInput name="phone" type="text" label="Price" fullWidth />
        {submissionError && (
          <p className="text-themeError">{submissionError}</p>
        )}
        <div className="absolute bottom-0 right-0">
          <AppButton
            title="Save"
            className="w-full"
            type="submit"
            loading={loading}
          />
        </div>
      </Form>
    </Formik>
  );
};

export default AddBook;
