import useSwr from "swr";
import { Book } from "@/utils/types";
import { getBooks } from "@/lib/book";

const useBooks = () => {
  const { data, error, mutate } = useSwr<Book[]>("/book", getBooks);

  return {
    books: data,
    isLoading: !error && !data,
    isError: error,
    mutateBooks: mutate,
  };
};

export default useBooks;
