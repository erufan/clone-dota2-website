"use client";
import usecreateQueryString from "@/hooks/usecreateQueryString";
import HeroFilter from "@/interface/heroes/HeroFilter";
import HeroSearchQuery from "@/interface/heroes/HeroSearchQuery";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

interface Props {
  filters: HeroFilter[];
  caption: string;
  searchParams: HeroSearchQuery;
}

const FilterIcons = ({ filters, caption, searchParams }: Props) => {
  const router = useRouter();
  const path = usePathname();
  const createQueryString = usecreateQueryString();
  const defaultClass = "-mr-1 brightness-50 saturate-0 cursor-pointer";
  const activeClass = "-mr-1 brightness-100 saturate-100 cursor-pointer";

  const heroSearchQueryKey = caption.toLowerCase() as keyof HeroSearchQuery;
  const filteredSearchQuery = searchParams[heroSearchQueryKey];

  const handleClick = (filterValue: string) => {
    const newQueryString = createQueryString(heroSearchQueryKey, filterValue);

    router.push(`${path}?${newQueryString}`, { scroll: false });
  };

  return (
    <li className="flex items-center">
      <span className="mr-2 opacity-45">{caption}</span>
      {filters.map((filter) => (
        <Image
          className={
            filteredSearchQuery === filter.key ? activeClass : defaultClass
          }
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
