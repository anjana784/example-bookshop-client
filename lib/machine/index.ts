import axiosInstance from "@/utils/axiosInstance";
import { Machine } from "@/utils/types";
import { AxiosError } from "axios";

export const getMachines = async () => {
  try {
    const response = await axiosInstance.get("/machine");
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

export const getMachine = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/machine/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

export const createMachine = async (machine: Machine) => {
  try {
    const response = await axiosInstance.post("/machine", machine);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

export const updateMachine = async (id: string, machine: Machine) => {
  try {
    const response = await axiosInstance.put(`/machine/${id}`, machine);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

export const deleteMachine = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/machine/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};
