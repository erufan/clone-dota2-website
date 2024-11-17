"use client";

import useHandleQuery from "@/hooks/useHandleQuery";
import { useSearchParams } from "next/navigation";
import { FaSearch } from "react-icons/fa";

const SearchHero = () => {
  const handleQuery = useHandleQuery("name");
  const param = useSearchParams();

  return (
    <>
      <form>
        <input
          className="bg-[#25282A] p-1 outline-0 focus:border-[none] focus:bg-[#505050]"
          type="text"
          onChange={(e) => handleQuery(e.target.value)}
          value={param?.get("name") || ""}
        />
      </form>
      <FaSearch className="ml-1" color="#4D4D4D" size={24} />
    </>
  );
};

export default SearchHero;
