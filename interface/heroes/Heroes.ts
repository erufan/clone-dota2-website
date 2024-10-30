interface Heroes {
  name: string;
  icon: string;
  slug: string;
  state: "universal" | "strength" | "intelligence" | "agility";
  complexity: number;
}

export default Heroes;
