"use client";

import useCreateQueryString from "@/hooks/usecreateQueryString";
import HeroSearchQuery from "@/interface/heroes/HeroSearchQuery";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";

const SearchHero = ({ searchParams }: { searchParams: HeroSearchQuery }) => {
  const router = useRouter();
  const path = usePathname();
  const createQueryString = useCreateQueryString();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newQueryString = createQueryString("name", e.target.value);

    router.push(`${path}?${newQueryString}`, { scroll: false });
  };

  return (
    <>
      <form>
        <input
          className="bg-[#25282A] p-1 outline-0 focus:border-[none] focus:bg-[#505050]"
          type="text"
          onChange={handleOnChange}
        />
      </form>
      <FaSearch className="ml-1" color="#4D4D4D" size={24} />
    </>
  );
};

export default SearchHero;
