import useSWR from "swr";
import { getCustomers } from "../../lib/customer";

const useCustomers = () => {
  const { data, error } = useSWR("/api/customer", getCustomers);

  return {
    customers: data,
    loading: !error && !data,
    error,
  };
};

export default useCustomers;
