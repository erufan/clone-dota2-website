import Image from "next/image";
import talents from "@/public/hero-details/talents.svg";
import innate from "@/public/hero-details/innate_icon.png";

import MyVidoe from "./MyVideo";

import { Media, Ability } from "@/interface/heroes/HeroDetails";

interface Props {
  media: Media;
  abilities: Ability[];
}

const HeroMedia = ({ media, abilities }: Props) => {
  return (
    <div className="relative -right-14 top-14 flex w-full flex-col items-center justify-center lg:w-[60%]">
      <MyVidoe media={media} />
      <div className="mt-[70%] flex -translate-x-9 flex-col flex-wrap items-center 2xl:mt-[20%]">
        <span className="mb-2 text-xl font-bold uppercase tracking-widest">
          Abilities
        </span>
        <div className="flex items-start gap-4">
          <Image src={talents} alt="talents tree" className="w-72px h-auto" />
          <Image src={innate} alt="innate icon" width={72} height={72} />
          <div className="flex w-[25rem] flex-wrap gap-4">
            {abilities.map((ability) => (
              <Image
                src={ability.abilityIcon}
                alt={"ability icon"}
                key={ability.name}
                width={72}
                height={72}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMedia;
