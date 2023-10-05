import axiosInstance from "@/utils/axiosInstance";
import { Book } from "@/utils/types";
import { AxiosError } from "axios";

export const getBooks = async () => {
  try {
    const response = await axiosInstance.get("/book");
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) return error.response?.data;
  }
};

export const createBook = async (book: Book) => {
  try {
    const response = await axiosInstance.post("/book", book);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) return error.response?.data;
  }
};

export const updateBook = async (id?: string, book?: Book) => {
  try {
    const response = await axiosInstance.put(`/book/${id}`, book);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) return error.response?.data;
  }
};

export const deleteBook = async (id?: string) => {
  try {
    const response = await axiosInstance.delete(`/book/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) return error.response?.data;
  }
};
