"use client";
import Image, { StaticImageData } from "next/image";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

interface Filters {
  key: string;
  dataImage: StaticImageData;
}

interface Props {
  filters: Filters[];
  caption: string;
}

const FilterIcons = ({ filters, caption }: Props) => {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === params.get(name)) {
        params.delete(name);
      } else params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const handleClick = (filterKey: string) => {
    const newQueryString = createQueryString(caption.toLowerCase(), filterKey);

    router.push(`${path}?${newQueryString}`);
  };

  return (
    <li className="flex items-center">
      <span className="mr-2 opacity-45">{caption}</span>
      {filters.map((filter) => (
        <Image
          className="-mr-1 brightness-50 saturate-0"
          src={filter.dataImage}
          alt={filter.key}
          key={filter.key}
          width={40}
          height={28}
          onClick={() => handleClick(filter.key)}
        />
      ))}
    </li>
  );
};

export default FilterIcons;
