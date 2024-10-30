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
        isState(attribute, hero.state) &&
        isComplexity(complexity, hero.complexity),
    );

    return filteredHeros.length !== 0 ? filteredHeros : heroes;
  }, [heroes, searchParams]);
};

export default useFilteredHeroes;

const isState = (attribute: string, state: string) => {
  return !attribute || state === attribute;
};

const isComplexity = (parComplexity: string, heroComplexity: number) => {
  return !parComplexity || heroComplexity === +parComplexity;
};
