import Heroes from "@/interface/Heroes";
import { useMemo } from "react";

interface searchParams {
  attribute: string;
  complexity: string;
}

const useFilteredHeroes = (heroes: Heroes[], searchParams: searchParams) => {
  return useMemo(() => {
    let filteredHeros = heroes.filter(
      (hero) => hero.state === searchParams.attribute,
    );

    return filteredHeros.length !== 0 ? filteredHeros : heroes;
  }, [heroes, searchParams]);
};

export default useFilteredHeroes;
