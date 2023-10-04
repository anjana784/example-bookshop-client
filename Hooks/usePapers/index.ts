import useSWR from "swr";
import { getPapers } from "../../lib/paper";

const usePapers = () => {
  const { data, error } = useSWR("/api/product", getPapers);

  return {
    papers: data?.data.items,
    error,
    loading: !data && !error,
  };
};

export default usePapers;
