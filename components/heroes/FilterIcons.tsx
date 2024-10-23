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
  const defaultClass =
    "-mr-1 brightness-50 saturate-0 cursor-pointer w-[40px] h-[28px]";
  const activeClass =
    "-mr-1 brightness-100 saturate-100 cursor-pointer w-[40px] h-[28px]";

  const heroSearchQueryKey = caption.toLowerCase() as keyof HeroSearchQuery;
  const filteredSearchQuery = searchParams[heroSearchQueryKey];

  const handleClick = function (filterValue: string) {
    const newQueryString = createQueryString(heroSearchQueryKey, filterValue);

    router.push(`${path}?${newQueryString}`, { scroll: false });
  };

  const isActive = function (key: string, index: number): boolean {
    const isComplexityFilter = caption.toLowerCase() === "complexity";

    if (isComplexityFilter) {
      const complexityLevelIndex = index + 1;
      return +filteredSearchQuery >= complexityLevelIndex;
    }

    return filteredSearchQuery === key;
  };

  return (
    <li className="flex items-center">
      <span className="mr-2 opacity-45">{caption}</span>
      {filters.map((filter, index) => (
        <Image
          className={isActive(filter.key, index) ? activeClass : defaultClass}
          src={filter.dataImage}
          alt={filter.key}
          key={filter.key}
          width={0}
          height={0}
          onClick={() => handleClick(filter.key)}
        />
      ))}
    </li>
  );
};

export default FilterIcons;
