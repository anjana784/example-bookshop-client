import { FC, useState } from "react";
import AppButton from "../AppButton";
import { createBook } from "@/lib/book";
import { Book } from "@/utils/types";
import { useStore } from "@/Store";
import { toast } from "react-toastify";
import { successIcon } from "../ToastifyIcons";
import { mutate } from "swr";
import { Formik, Form } from "formik";
import * as YUP from "yup";
import FormikInput from "../FormikInput";
import useBooks from "@/Hooks/useBooks";

const AddBook: FC = () => {
  const { popupState, setPopupState } = useStore((state) => state);

  const { mutateBooks } = useBooks();

  // loading state
  const [loading, setLoading] = useState<boolean>(false);

  // submission error state
  const [submissionError, setSubmissionError] = useState<String | null>(null);

  // customer state for the form
  const book: Book = {
    name: "",
    author: "",
    genre: "",
    price: "",
  };

  // validation schema for the customer
  const validationSchema = YUP.object<Book>({
    name: YUP.string().required("Required"),
    author: YUP.string().required("Required"),
    genre: YUP.string().required("Required"),
    price: YUP.number().required("Required"),
  });

  // handle the submitting a new customer
  const handleSubmit = async (book: Book) => {
    setLoading(true);
    const response = await createBook(book);
    setLoading(false);
    if (response) {
      if (response.status === "error") {
        setSubmissionError(response.message);
      } else {
        mutateBooks();
        setPopupState({ ...popupState, isOpen: false });
        toast.success("Book added successfully", {
          icon: successIcon,
        });
      }
    }
  };

  return (
    <Formik
      initialValues={book}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form method="post" className="h-full w-full">
        <FormikInput name="name" type="text" label="Name" fullWidth />
        <FormikInput name="author" type="text" label="Author" fullWidth />
        <FormikInput name="genre" type="text" label="Genre" fullWidth />
        <FormikInput name="price" type="number" label="Price" fullWidth />
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
