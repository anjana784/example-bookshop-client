import useSWR from "swr";
import { getJobOptions } from "../../lib/jobOption";

const useJobOptions = () => {
  const { data, error } = useSWR("/api/job-option", getJobOptions);

  return {
    jobOptions: data,
    error,
    loading: !data && !error,
  };
};

export default useJobOptions;
