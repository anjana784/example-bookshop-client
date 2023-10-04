import axiosInstance from "@/utils/axiosInstance";
import { Customer } from "@/utils/types";
import { AxiosError } from "axios";

export const getCustomers = async () => {
  try {
    const response = await axiosInstance.get("/customer");
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

export const getCustomer = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/customer/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

export const createCustomer = async (customer: Customer) => {
  try {
    const response = await axiosInstance.post("/customer", customer);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

export const updateCustomer = async (id: string, customer: Customer) => {
  try {
    const response = await axiosInstance.put(`/customer/${id}`, customer);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

export const deleteCustomer = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/customer/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};
