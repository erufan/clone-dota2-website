import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

const useCreateQueryString = () => {
  const searchParams = useSearchParams();

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === params.get(name) || !value) {
      params.delete(name);
    } else params.set(name, value);

    return params.toString();
  };

  return useCallback(createQueryString, [searchParams]);
};

export default useCreateQueryString;
