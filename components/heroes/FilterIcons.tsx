"use client";
import usecreateQueryString from "@/hooks/usecreateQueryString";
import Image, { StaticImageData } from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

interface Filters {
  key: string;
  dataImage: StaticImageData;
}

interface Props {
  filters: Filters[];
  caption: string;
}

const FilterIcons = ({ filters, caption }: Props) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const router = useRouter();
  const path = usePathname();
  const createQueryString = usecreateQueryString();
  const defaultClass = "-mr-1 brightness-50 saturate-0 cursor-pointer";
  let activeClass = "-mr-1 brightness-100 saturate-100 cursor-pointer";

  const handleClick = (filterKey: string) => {
    const newQueryString = createQueryString(caption.toLowerCase(), filterKey);

    if (newQueryString !== "") setActiveFilter(filterKey);
    else activeFilter ? setActiveFilter(null) : setActiveFilter(filterKey);

    router.push(`${path}?${newQueryString}`, { scroll: false });
  };

  return (
    <li className="flex items-center">
      <span className="mr-2 opacity-45">{caption}</span>
      {filters.map((filter) => (
        <Image
          className={activeFilter === filter.key ? activeClass : defaultClass}
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
