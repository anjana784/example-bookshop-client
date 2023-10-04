import useSWR from "swr";
import { getMachines } from "../../lib/machine";

const useMachines = () => {
  const { data, error } = useSWR("/api/machine", getMachines);

  return {
    machines: data,
    loading: !error && !data,
    error,
  };
};

export default useMachines;
