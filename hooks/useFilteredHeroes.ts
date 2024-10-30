import Heroes from "@/interface/heroes/Heroes";
import { useMemo } from "react";

interface searchParams {
  attribute: string;
  complexity: string;
}

const useFilteredHeroes = (heroes: Heroes[], searchParams: searchParams) => {
  return useMemo(() => {
    const { attribute, complexity } = searchParams;

    const filteredHeros = heroes.filter(
      (hero) =>
        matchesHero(attribute, hero.state) &&
        matchesHero(complexity, hero.complexity),
    );

    return filteredHeros.length !== 0 ? filteredHeros : heroes;
  }, [heroes, searchParams]);
};

export default useFilteredHeroes;

const matchesHero = (searchParam: string, hero: number | string) => {
  let param: string | number = searchParam;
  if (typeof hero === "number") param = +param;

  return !param || param === hero;
};
