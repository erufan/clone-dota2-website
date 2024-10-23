import str from "@/public/filter/filter-str-active.png";
import agi from "@/public/filter/filter-agi-active.png";
import uni from "@/public/filter/filter-uni-active.png";
import int from "@/public/filter/filter-int-active.png";
import HeroFilter from "@/interface/heroes/HeroFilter";

const statusFilters: HeroFilter[] = [
  { key: "strength", dataImage: str },
  { key: "agility", dataImage: agi },
  { key: "intelligence", dataImage: int },
  { key: "universal", dataImage: uni },
];

export default statusFilters;
