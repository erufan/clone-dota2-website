import { usePathname, useRouter } from "next/navigation";

import useCreateQueryString from "./usecreateQueryString";

const useHandleQuery = (param: string) => {
  const createQueryString = useCreateQueryString();
  const router = useRouter();
  const path = usePathname();

  const handleQuery = (wantedFilter: string) => {
    const newQueryString = createQueryString(param, wantedFilter);

    router.push(`${path}?${newQueryString}`, { scroll: false });
  };

  return handleQuery;
};

export default useHandleQuery;
