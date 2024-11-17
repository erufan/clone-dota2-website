import heroesDetails from "@/data/heroesDetails";

const getHeroDetails = (heroKey: keyof typeof heroesDetails) => {
  const hero = heroesDetails[heroKey];
  return hero;
};

export default getHeroDetails;
