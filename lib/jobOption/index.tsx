import axiosInstance from "@/utils/axiosInstance";
import { JobOption } from "@/utils/types";
import { AxiosError } from "axios";

export const getJobOptions = async () => {
  try {
    const response = await axiosInstance.get("/job-option");
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

export const getJobOption = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/job-option/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

export const createJobOption = async (jobOption: JobOption) => {
  try {
    const response = await axiosInstance.post("/job-option", jobOption);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

export const updateJobOption = async (id: string, jobOption: JobOption) => {
  try {
    const response = await axiosInstance.put(`/job-option/${id}`, jobOption);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};

export const deleteJobOption = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/job-option/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
  }
};
