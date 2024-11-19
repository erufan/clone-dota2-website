export interface Ability {
  name?: string;
  description: string;
  abilityIcon?: string;
}

export interface Media {
  mov: string;
  webm: string;
  poster: string;
}

interface HeroDetails {
  state: "universal" | "strength" | "intelligence" | "agility";
  heroIntro: string;
  heroName: string;
  shortDescription: string;
  media: Media;
  abilities: Ability[];
  complexity: number;
  history: string;
}

export default HeroDetails;
