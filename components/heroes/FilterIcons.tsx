"use client";
import useHandleQuery from "@/hooks/useHandleQuery";
import HeroFilter from "@/interface/heroes/HeroFilter";
import HeroSearchQuery from "@/interface/heroes/HeroSearchQuery";
import Image from "next/image";

interface Props {
  filters: HeroFilter[];
  caption: string;
  searchParams: HeroSearchQuery;
}

const FilterIcons = ({ filters, caption, searchParams }: Props) => {
  const heroSearchQueryKey = caption.toLowerCase() as keyof HeroSearchQuery;
  const filteredSearchQuery = searchParams[heroSearchQueryKey];
  const isActive = function (key: string, index: number): boolean {
    const isComplexityFilter = caption.toLowerCase() === "complexity";
    const complexityLevelIndex = index + 1;

    return isComplexityFilter
      ? +filteredSearchQuery >= complexityLevelIndex
      : filteredSearchQuery === key;
  };
  const handleQuery = useHandleQuery(heroSearchQueryKey);

  const defaultClass =
    "-mr-1 brightness-50 saturate-0 cursor-pointer w-[40px] h-[28px]";
  const activeClass =
    "-mr-1 brightness-100 saturate-100 cursor-pointer w-[40px] h-[28px]";
  return (
    <>
      <span className="mr-2 opacity-45">{caption}</span>
      {filters.map((filter, index) => (
        <Image
          className={isActive(filter.key, index) ? activeClass : defaultClass}
          src={filter.dataImage}
          alt={filter.key}
          key={filter.key}
          width={0}
          height={0}
          onClick={() => handleQuery(filter.key)}
        />
      ))}
    </>
  );
};

export default FilterIcons;
