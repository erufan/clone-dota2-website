import Image from "next/image";
import talents from "@/public/hero-details/talents.svg";
import innate from "@/public/hero-details/innate_icon.png";

import MyVidoe from "./MyVideo";

import { Media, Ability } from "@/interface/heroes/HeroDetails";
import IconAbility from "./IconAbility";

interface Props {
  media: Media;
  abilities: Ability[];
}

const HeroMedia = ({ media, abilities }: Props) => {
  return (
    <div className="relative -right-14 top-14 flex w-full flex-col items-center justify-center lg:w-[60%]">
      <MyVidoe media={media} />
      <div className="mt-[60%] flex -translate-x-9 flex-col flex-wrap items-center 2xl:mt-[20%]">
        <span className="mb-2 text-xl font-bold uppercase tracking-widest">
          Abilities
        </span>
        <div className="flex items-start gap-4">
          <Image src={talents} alt="talents tree" className="h-auto w-[65px]" />

          <IconAbility
            description={abilities[0].description}
            name={abilities[0]?.name}
          >
            <Image
              src={innate}
              alt="talents tree"
              className="w-72px h-auto"
              width={72}
              height={72}
            />
          </IconAbility>

          <div className="flex w-[30rem] flex-wrap justify-start gap-3">
            {abilities.map((ability, index) =>
              index === 0 ? null : (
                <IconAbility
                  description={ability.description}
                  name={ability?.name}
                >
                  <Image
                    src={ability.abilityIcon!}
                    alt={"ability icon"}
                    key={ability.description}
                    width={72}
                    height={72}
                    className="group-hover:brightness-125"
                  />
                </IconAbility>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMedia;
