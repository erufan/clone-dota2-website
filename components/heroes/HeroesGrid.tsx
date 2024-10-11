import Link from "next/link";
import Image from "next/image";

import Heroes from "@/interface/Heroes";
import stateImage from "@/data/state-image";

interface Props {
  heroes: Heroes[];
}

const HeroesGrid = ({ heroes }: Props) => {
  return (
    <>
      {heroes.map((hero) => (
        <Link
          href={`/${hero.slug}`}
          key={hero.name}
          className="group overflow-hidden shadow-[1px_1px_#000] saturate-[0.8] transition-all duration-300 hover:z-50 hover:scale-[1.4] hover:shadow-[3px_3px_8px_#000] hover:saturate-[1]"
        >
          <figure className="relative">
            <Image src={hero.icon} alt={hero.name} width={256} height={144} />
            <figcaption className="opacity-1 absolute z-[2] flex w-[100%] items-center gap-1 p-1 pb-2 group-hover:flex group-hover:animate-showHeroName">
              <img
                src={stateImage[hero.state]}
                alt={hero.state}
                width={22}
                height={22}
              />
              <span className="flex-1 font-reaver text-[0.5rem] font-semibold leading-[0.8] sm:text-xl">
                {hero.name}
              </span>
            </figcaption>
            <div className="bg-heroNameGradient absolute top-0 z-[1] h-[100%] w-[100%] opacity-0 group-hover:animate-showHeroName"></div>
          </figure>
        </Link>
      ))}
    </>
  );
};

export default HeroesGrid;
