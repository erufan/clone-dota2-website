"use client";

import useHandleQuery from "@/hooks/useHandleQuery";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchHero = () => {
  const param = useSearchParams();
  const [value, setValue] = useState(param.get("name"));
  const handleQuery = useHandleQuery("name", 400);

  return (
    <>
      <form>
        <input
          className="bg-[#25282A] p-1 outline-0 focus:border-[none] focus:bg-[#505050]"
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
            handleQuery(e.target.value);
          }}
          value={value || ""}
        />
      </form>
      <FaSearch className="ml-1" color="#4D4D4D" size={24} />
    </>
  );
};

export default SearchHero;
