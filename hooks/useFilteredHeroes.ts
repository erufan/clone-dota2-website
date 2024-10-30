import Heroes from "@/interface/heroes/Heroes";
import HeroSearchQuery from "@/interface/heroes/HeroSearchQuery";
import { useMemo } from "react";

const useFilteredHeroes = (heroes: Heroes[], searchParams: HeroSearchQuery) => {
  return useMemo(() => {
    const { attribute, complexity, name } = searchParams;

    const filteredHeros = heroes.filter(
      (hero) =>
        matchesHero(attribute, hero.state) &&
        matchesHero(complexity, hero.complexity) &&
        matchesName(name, hero.name),
    );

    if (name?.length > 0 && filteredHeros.length === 0) return [];

    return filteredHeros.length !== 0 ? filteredHeros : heroes;
  }, [heroes, searchParams]);
};

export default useFilteredHeroes;

const matchesHero = (searchParam: string, hero: number | string) => {
  let param: string | number = searchParam;
  if (typeof hero === "number") param = +param;

  return !param || param === hero;
};

const matchesName = (searchParam: string, heroName: string) => {
  if (!searchParam) return true;
  return heroName.toLowerCase().includes(searchParam.toLowerCase());
};
