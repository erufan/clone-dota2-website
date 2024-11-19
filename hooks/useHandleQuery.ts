import { usePathname, useRouter, useSearchParams } from "next/navigation";

import useCreateQueryString from "./usecreateQueryString";
import { useCallback } from "react";

const simpleDebounce = (fn, delay) => {
  let timeOut;
  return (...args) => {
    if (timeOut) clearTimeout(timeOut);
    timeOut = setTimeout(() => fn(...args), delay);
  };
};

const useHandleQuery = (query: string, delay: number) => {
  const createQueryString = useCreateQueryString();
  const { replace } = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const handleQuery = (term: string) => {
    const newQueryString = createQueryString(query, term);

    replace(`${path}?${newQueryString}`, { scroll: false });
  };

  return useCallback(simpleDebounce(handleQuery, delay), [
    path,
    query,
    searchParams,
    replace,
  ]);
};

export default useHandleQuery;
