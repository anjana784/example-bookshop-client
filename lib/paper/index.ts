import axiosInstance from "@/utils/axiosInstance";
import { Paper, PaperVarient, Product } from "@/utils/types";
import { AxiosError } from "axios";

// get all papers
export const getPapers = async () => {
  try {
    const response = await axiosInstance.get("/paper/paper-type");
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

// get a paper
export const getPaper = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/paper/paper-type/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

// create a paper
export const createPaper = async (product: Product) => {
  try {
    const response = await axiosInstance.post("/paper/paper-type", product);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

// update a paper
export const updatePaper = async (id: string, newProduct: Product) => {
  try {
    const response = await axiosInstance.put(
      `/paper/paper-type/${id}`,
      newProduct
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

// delete a paper
export const deletePaper = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/paper/paper-type/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

// add a varient to a paper
export const addVarient = async (id: string, varient: PaperVarient) => {
  try {
    const response = await axiosInstance.post(
      `/paper/paper-varient/${id}`,
      varient
    );
    console.log(response.data);

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);

      return error.request.data;
    }
  }
};

// get all varients of a paper
export const getVarients = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/paper/paper-varient/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.request.data;
    }
  }
};

// get a varient of a paper
export const getVarient = async (paparId: string, varientId: string) => {
  try {
    const response = await axiosInstance.get(
      `/paper/paper-varient/${paparId}/${varientId}`
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.request.data;
    }
  }
};

// update a varient of a paper
export const updateVarient = async (
  paperId?: string,
  varientId?: string,
  newVarient?: PaperVarient
) => {
  try {
    const response = await axiosInstance.put(
      `/paper/paper-varient/${paperId}/${varientId}`,
      newVarient
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.request.data;
    }
  }
};

// delete a varient of a paper
export const deleteVarient = async (paperId?: string, varientId?: string) => {
  try {
    const response = await axiosInstance.delete(
      `/paper/paper-varient/${paperId}/${varientId}`
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.request.data;
    }
  }
};
