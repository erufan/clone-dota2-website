import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

import useCreateQueryString from "./usecreateQueryString";
import debounce from "@/utils/debounce";

const useHandleQuery = (query: string, delay: number) => {
  const createQueryString = useCreateQueryString();
  const { replace } = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const handleQuery = (term: string) => {
    const newQueryString = createQueryString(query, term);

    replace(`${path}?${newQueryString}`, { scroll: false });
  };

  return useCallback(debounce(handleQuery, delay), [
    path,
    query,
    searchParams,
    replace,
  ]);
};

export default useHandleQuery;
