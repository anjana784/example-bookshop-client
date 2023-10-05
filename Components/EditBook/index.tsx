import { FC, useState } from "react";
import AppButton from "../AppButton";
import { updateBook } from "@/lib/book";
import { Book } from "@/utils/types";
import { useStore } from "@/Store";
import { toast } from "react-toastify";
import { successIcon } from "../ToastifyIcons";
import { Form, Formik } from "formik";
import FormikInput from "../FormikInput";
import * as YUP from "yup";
import useBooks from "@/Hooks/useBooks";

interface Props {
  book: Book;
}

const EditBook: FC<Props> = ({ book }) => {
  const { mutateBooks } = useBooks();
  const { popupState, setPopupState } = useStore((state) => state);

  const [loading, setLoading] = useState<boolean>(false);
  const [submissionError, setSubmissionError] = useState<String | null>(null);

  const [bookState, setBookState] = useState<Book>({
    name: book.name,
    author: book.author,
    genre: book.genre,
    price: book.price,
  });

  // validation schema for the customer
  const validationSchema = YUP.object<Book>({
    name: YUP.string().required("Required"),
    author: YUP.string().required("Required"),
    genre: YUP.string().required("Required"),
    price: YUP.number().required("Required"),
  });

  const handleSubmit = async (values: Book) => {
    setLoading(true);
    const response = await updateBook(book._id, {
      name: values.name,
      author: values.author,
      genre: values.genre,
      price: values.price,
    });
    setLoading(false);
    if (response) {
      if (response.status === "error") {
        setSubmissionError(response.message);
      } else {
        mutateBooks();
        setPopupState({ ...popupState, isOpen: false });
        toast.success("book updated successfully", {
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
        <FormikInput
          name="name"
          type="text"
          label="Name"
          value={bookState.name}
          fullWidth
        />
        <FormikInput
          name="author"
          type="text"
          label="Author"
          value={bookState.author}
          fullWidth
        />
        <FormikInput
          name="genre"
          type="text"
          label="Genre"
          value={bookState.genre}
          fullWidth
        />
        <FormikInput
          name="price"
          type="number"
          label="Price"
          value={bookState.price}
          fullWidth
        />
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

export default EditBook;
